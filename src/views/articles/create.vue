<template>
  <PageWrapper
    :contentFullHeight="true"
    :title="article?.title || t('articles.create.create_new_article').toUpperCase()"
  >
    <template #headerContent>
      <Avatar :src="userInfo.avatar" />
      作者:{{ userInfo.realName }} 已经输入0个字符
    </template>
    <ArticleEditor :article="article" :is-saving="isSaving" @save="onSave" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import type { Article } from '/#/article';
  import { Avatar } from 'ant-design-vue';
  import ArticleEditor from './components/ArticleEditor.vue';
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useUserStore } from '/@/store/modules/user';
  import { saveArticle } from '/@/api/crm';
  import { useRouter } from 'vue-router';
  const { t } = useI18n();
  const router = useRouter();
  const userInfo = useUserStore().getUserInfo;
  let article = reactive({ editor_type: 'html' } as Article);
  const isSaving = ref(false);

  const onSave = async (new_article: Article) => {
    // 数据完整性验证步骤
    if (new_article?.title) {
      isSaving.value = true;
      try {
        article = await saveArticle(new_article);
        isSaving.value = false;
        //如果数据保存完成跳转到目录页
        if (article._id) {
          router.push('/crm/articles');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
</script>
