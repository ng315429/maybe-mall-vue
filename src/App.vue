<template>
  <div class="main-wrap" id="app">
    <div class="main-area">
      <router-view />
      <login-modal v-if="showLoginModal"></login-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoginModal: false,
    };
  },
  components: {
    LoginModal: () => import('@/components/LoginModal'),
  },
  methods: {
    showLogin(show) {
      this.showLoginModal = show;
    },
  },
  created() {
    this.$EventBus.$on('show-login', this.showLogin);
  },
  destroyed() {
    this.$EventBus.$off('show-login');
  },
};
</script>

<style lang="scss">
.main-wrap {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #f7f7f5;
  .main-area {
    width: 100%;
    max-width: 414px;
    margin: 0 auto;
    border: 1px solid $main-color;
  }
}
</style>
