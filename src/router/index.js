import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '메인',
    redirect: '/',
    component: () => import('@/layout/MainLayout'),
    children: [
      {
        path: '/',
        name: '메인',
        component: () => import('@/views/QuestionListView.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('@/layout/MainLayout'),
    children: [
      {
        path: '',
        name: '회원가입',
        component: () => import('@/views/UserRegisterView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
