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
  {
    path: '/question',
    component: () => import('@/layout/MainLayout'),
    children: [
      {
        path: 'add',
        name: '질문등록',
        component: () => import('@/views/QuestionAddView.vue'),
      },
      {
        path: ':id',
        name: '질문상세',
        component: () => import('@/views/QuestionDetailView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
