<template>
  <PageWrapper :contentFullHeight="true" title="Title">
    <template #headerContent> Header </template>
    <div v-if="tags">{{ tags }}</div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  // import {
  //   Avatar,
  //   List,
  //   ListItem,
  //   ListItemMeta,
  //   TypographyParagraph,
  //   Skeleton,
  //   SkeletonImage,
  //   SkeletonButton,
  // } from 'ant-design-vue';
  // import { useRouter } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { getTags } from '/@/api/crm';

  // const router = useRouter();
  const isLoading = ref(false);
  const tags = ref();
  const count = ref(0);

  onMounted(async () => {
    await fetchTags();
  });

  const fetchTags = async () => {
    isLoading.value = true;
    tags.value = await getTags();
    if (tags.value) count.value = tags.value.length || 0;
    isLoading.value = false;
  };
</script>
