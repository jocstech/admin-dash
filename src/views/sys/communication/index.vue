<template>
  <PageWrapper title="前后端联调">
    <template #headerContent>
      <h1>前后端联调</h1>
      <div class="flex flex-col justify-between items-stretch gap-2">
        <span class="flex-1">
          <a :href="GITHUB_URL" target="_blank">{{ name }}</a>
          在我们开发的过程中，发送请求的ajax数据都不是后端返回的真数据，<br />
          而是我们自己通过接口mock模拟的假数据，当前端的代码编写完成后， <br />
          后端的接口也写好后，我们就需要把mock数据换点，尝试使用后端提供的数据，<br />
          进行一个前后端的调试，我们会把这个过程叫做前后端接口联调。
        </span>
        <span class="flex-1">上次构建时间： {{ lastBuildTime }}</span>
      </div>
    </template>
    <div><Empty /></div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { Empty } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { GITHUB_URL } from '/@/settings/siteSetting';

  const { pkg, lastBuildTime } = __APP_INFO__;

  const { name } = pkg;
</script>
