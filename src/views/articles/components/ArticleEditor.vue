<template>
  <div class="article-editor flex gap-4 <md:flex-col">
    <div class="editor flex flex-col gap-2 flex-auto">
      <Input
        v-model:value="_article.title"
        :placeholder="t('articles.create.enter_the_title')"
        size="large"
      />
      <Input
        v-model:value="_article.subtitle"
        :placeholder="t('articles.create.enter_the_subtitle')"
        size="large"
      />
      <Tinymce height="600" v-model="_article.content" />
    </div>

    <div class="meta-info flex flex-col gap-2 flex-auto max-w-lg">
      <div class="bg-white border p-2">
        <div class="section-title">文章封面图</div>
        <img v-if="_article.cover" :src="_article.cover" :alt="_article.title" />
      </div>
      <div class="bg-white border p-2">
        <div class="section-title">文章摘要</div>
        <Textarea
          v-model:value="_article.excerpt"
          placeholder="请输入文章的摘要内容"
          :rows="12"
          show-count
        />
      </div>

      <div class="bg-white border p-2">
        <div class="section-title">文章标签</div>
      </div>
      <div class="bg-white border p-2">
        <div class="section-title">发布时间</div>
        <DatePicker show-time showNow placeholder="选择发布时间" v-model:value="_published_at" />
      </div>
      <div class="bg-white border p-2 flex gap-2">
        <Button @click="$emit('save', _article)" :loading="isSaving" :disabled="isSaving">{{
          _article._id ? (isSaving ? 'Updating' : 'Update') : isSaving ? 'Saving' : 'Save'
        }}</Button>
        <Button type="primary" @click="publishToggle">
          {{ _article.published_at ? 'Unpublish' : 'Publish' }}</Button
        >
        <Button type="danger" v-if="!_article._id">Discard</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { default as dayjs } from 'dayjs';
  import { computed } from 'vue';
  import { Input, Textarea, Button, DatePicker } from 'ant-design-vue';
  import { Tinymce } from '/@/components/Tinymce';
  import type { Article } from '/#/server';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { t } = useI18n();

  const props = defineProps<{
    article: Article;
    isSaving: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'update:article', article: Article): void;
    (e: 'save', article: Article): void;
  }>();

  // v-model object 双向绑定的秘密
  const _article = computed({
    get: () => props.article,
    set: (value) => emit('update:article', value),
  });

  const _published_at = computed({
    get: () => dayjs(_article.value.published_at),
    set: (value) => (_article.value.published_at = value.toDate()),
  });

  const publishToggle = () => {
    if (_article.value.published_at) delete _article.value.published_at;
  };
</script>

<style lang="scss" scoped></style>
