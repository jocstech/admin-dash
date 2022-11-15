import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const articles: AppRouteModule = {
  path: '/crm',
  name: 'Articles',
  component: LAYOUT,
  redirect: '/crm/articles',
  meta: {
    hideChildrenInMenu: false,
    icon: 'ant-design:container-outlined',
    title: t('routes.dashboard.articles.title'),
    orderNo: 1,
  },
  children: [
    {
      path: 'articles',
      name: 'ArticlesListPage',
      component: () => import('/@/views/articles/index.vue'),
      meta: {
        title: t('routes.dashboard.articles.articles_list'),
        icon: 'ant-design:unordered-list-outlined',
        hideMenu: false,
      },
    },
    {
      path: 'create',
      name: 'ArticlesCreatePage',
      component: () => import('/@/views/articles/create.vue'),
      meta: {
        title: t('routes.dashboard.articles.create_article'),
        icon: 'ant-design:file-add-outlined',
        hideMenu: false,
      },
    },
    {
      path: ':id',
      name: 'ArticlesEditPage',
      component: () => import('/@/views/articles/edit.vue'),
      meta: {
        title: t('routes.dashboard.articles.edit_article'),
        icon: 'ant-design:file-add-outlined',
        hideMenu: true,
      },
    },
    {
      path: 'tags',
      name: 'ArticlesTagsPage',
      component: () => import('/@/views/articles/tags.vue'),
      meta: {
        title: t('routes.dashboard.articles.tags'),
        icon: 'ant-design:tag-outlined',
        hideMenu: false,
      },
    },
  ],
};

export default articles;
