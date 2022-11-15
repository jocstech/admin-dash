<template>
  <PageWrapper title="文章总列表">
    <template #headerContent>
      <h1>总共{{ count }}篇</h1>
    </template>
    <div>
      <List
        item-layout="vertical"
        :data-source="articles"
        :bordered="true"
        size="small"
        class="bg-white"
      >
        <template #header>
          <div class="space-x-2">
            <a-button type="primary" preIcon="el:file-new" @click="router.push('/crm/create')">
              写文章
            </a-button>
            <a-button type="default" preIcon="fa:refresh" @click="fetchArticles">
              刷新列表
            </a-button>
          </div>
        </template>
        <template #renderItem="{ item }">
          <ListItem>
            <template #actions v-if="isLoading">
              <SkeletonButton active size="small" shape="default" />
              <SkeletonButton active size="small" shape="default" />
              <SkeletonButton active size="small" shape="default" />
            </template>
            <template #actions v-else>
              <a-button size="small" @click="router.push(`/crm/${item._id}`)">Edit</a-button>
              <a-button size="small">Hide</a-button>
              <a-button size="small" danger>Delete</a-button>
            </template>
            <Skeleton :loading="isLoading" active avatar title :paragraph="{ rows: 4 }">
              <ListItemMeta>
                <template #avatar>
                  <Avatar :size="64" :src="item.author.avatar" />
                </template>
                <template #title>
                  <router-link :to="`/crm/${item._id}`">
                    <h2 class="text-lg">{{ item.title }}</h2>
                  </router-link>
                </template>
                <template #description>
                  <div class="space-x-2">
                    <span> <b>作者:</b> {{ item.author.username }}</span>
                    <span> <b>发布时间:</b> {{ new Date(item.created_at).toLocaleString() }}</span>
                    <span v-if="item.updated_at">
                      <b>上次修改:</b> {{ new Date(item.updated_at).toLocaleString() }}</span
                    >
                  </div>
                </template>
              </ListItemMeta>
              <div class="overflow-ellipsis overflow-hidden">
                <TypographyParagraph
                  :ellipsis="{ rows: 4, expandable: true, symbol: 'more' }"
                  :content="item.excerpt"
                  class="leading-8"
                />
              </div>
            </Skeleton>
            <template #extra v-if="isLoading"> <SkeletonImage /></template>
            <template #extra v-else>
              <img width="300" :alt="item.title" :src="item.cover" />
            </template>
          </ListItem>
        </template>
        <template #footer>
          <div>
            <h1>文章总列表 总共{{ count }}篇</h1>
          </div>
        </template>
      </List>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import {
    Avatar,
    List,
    ListItem,
    ListItemMeta,
    TypographyParagraph,
    Skeleton,
    SkeletonImage,
    SkeletonButton,
  } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { getArticles } from '/@/api/crm';

  const router = useRouter();
  const isLoading = ref(false);
  const articles = ref();
  const count = ref(0);

  onMounted(async () => {
    await fetchArticles();
  });

  const fetchArticles = async () => {
    isLoading.value = true;
    articles.value = await getArticles();
    if (articles.value) count.value = articles.value.length || 0;
    isLoading.value = false;
  };
</script>
