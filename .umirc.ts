import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: '@/pages/LoginPage',
    },
    {
      path: '/main',
      component: '@/pages/index',
      routes: [
        { path: '/main', redirect: '/main/data' },
        { path: '/main/data', component: '@/pages/DataDisplayPage' },
        { path: '/main/setting', component: '@/pages/SettingsPage' },
        { path: '/main/userlist-access', component: '@/pages/UserListPage/UserAccessList' },
        { path: '/main/userlist-records', component: '@/pages/UserListPage/UserRecordList' },
        { path: '/main/admin', component: '@/pages/AdminPage' },
      ],
    },
  ],
  fastRefresh: {},
  mfsu: {},
  dynamicImport: {
    loading: '@/Loading',
  },
  proxy: {
    '/api': {
      target:
        'http://192.168.177.137:8000/glimmer-bank/platform',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
