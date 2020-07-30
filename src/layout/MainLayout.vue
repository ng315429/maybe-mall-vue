<template>
  <div>
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <!-- <span class="md-title">Maybe</span> -->
      </md-toolbar>
      <md-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title" @click="goPathPush('/')">Maybe</span>
        </md-toolbar>

        <md-list>
          <template v-if="isLogin">
            <md-list-item @click="goPathPush('/login')">
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">마이페이지</span>
            </md-list-item>
          </template>
          <template v-else>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">마이페이지</span>
            </md-list-item>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">올린 질문</span>
            </md-list-item>
          </template>
        </md-list>
      </md-drawer>

      <md-content>
        <router-view></router-view>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      showNavigation: false,
    };
  },
  methods: {
    goPathPush(path) {
      this.showNavigation = false;
      if (this.$route.path !== path) {
        if (path === '/login') {
          this.$EventBus.$emit('show-login', true);
        } else {
          this.$router.push(`${path}`);
        }
      }
    },
  },
};
</script>

<style></style>
