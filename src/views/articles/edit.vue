<template>
  <PageWrapper :title="article?.title || '文章编辑页面'">
    <template #headerContent>
      <div>
        <router-link to="/crm"> 👈返回文章列表</router-link>
      </div>
    </template>
    <div>
      <div v-if="article?._id">
        <ArticleEditor :article="article" :is-saving="isSaving" @save="onUpdate" />
      </div>
      <div v-else class="loading-view">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { Skeleton } from 'ant-design-vue';
  import ArticleEditor from './components/ArticleEditor.vue';
  import { useRouter } from 'vue-router';
  import { getArticleById, updateArticle } from '/@/api/crm';
  import { Article } from '/#/article';
  import { extractDiff } from '/@/utils/data';

  let raw_article = {} as Article;
  const article = ref({} as Article);
  const isSaving = ref(false);

  const { currentRoute, back } = useRouter();

  onMounted(async () => {
    try {
      article.value = await getArticleById(currentRoute.value.params.id as string);
      raw_article = { ...article.value };
    } catch (error) {
      back();
    }
  });

  const onUpdate = async (update_article: Article) => {
    if (raw_article._id && update_article) {
      isSaving.value = true;
      try {
        article.value = await updateArticle(
          raw_article._id,
          extractDiff(raw_article, update_article),
        );
        raw_article = { ...article.value };
      } catch (error) {
        console.log(error);
      }
      isSaving.value = false;
    }
  };
</script>
