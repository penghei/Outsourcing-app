import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/', redirect: '/data' },
        { path: '/data', component: '@/pages/DataDisplayPage' },
        { path: '/setting', component: '@/pages/SettingsPage' },
        { path: '/userlist', component: '@/pages/UserListPage' },
        { path: '/admin', component: '@/pages/AdminPage' },
      ],
    },
  ],
  fastRefresh: {},
});
