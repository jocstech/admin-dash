import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/communication',
  name: 'Communication',
  component: LAYOUT,
  redirect: '/communication/index',
  meta: {
    hideChildrenInMenu: false,
    icon: 'ant-design:api-filled',
    title: t('routes.dashboard.communication'),
    orderNo: 1,
  },
  children: [
    {
      path: 'index',
      name: 'CommunicationPage',
      component: () => import('/@/views/sys/communication/index.vue'),
      meta: {
        title: t('routes.dashboard.communication'),
        icon: 'ant-design:api-filled',
        hideMenu: false,
      },
    },
  ],
};

export default about;
