import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
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
];

const router = new VueRouter({
  routes,
});

export default router;
