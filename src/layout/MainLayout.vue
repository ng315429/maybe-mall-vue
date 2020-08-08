<template>
  <div>
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <!-- <span class="md-title">{{ this.$route.name }}</span> -->
      </md-toolbar>
      <md-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title" @click="goPathPush('/')">Maybe</span>
        </md-toolbar>

        <md-list>
          <template v-if="!isLogin">
            <md-list-item @click="goPathPush('/login')">
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">로그인</span>
            </md-list-item>
            <md-list-item @click="goPathPush('/register')">
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">회원가입</span>
            </md-list-item>
          </template>
          <template v-else>
            <md-list-item @click="goPathPush('/questions/add')">
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">질문등록</span>
            </md-list-item>
            <md-list-item @click="goPathPush('/questions/me')">
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">올린 질문</span>
            </md-list-item>
            <md-list-item @click="goPathPush('login')">
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">로그아웃</span>
            </md-list-item>
          </template>
        </md-list>
      </md-drawer>

      <md-content>
        <div class="main-content">
          <router-view></router-view>
        </div>
      </md-content>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      showNavigation: false,
    };
  },
  computed: {
    ...mapGetters({
      isLogin: 'getUserName',
    }),
  },
  methods: {
    goPathPush(path) {
      if (path === 'login') {
        this.$store.commit('SET_INIT');
        location.href = '/';
      } else {
        this.showNavigation = false;
        if (this.$route.path !== path) {
          this.$router.push(`${path}`);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.main-content {
  width: 100%;
  height: 100%;
  background-color: $main-background-color;
  padding: 1rem 1rem;
}
</style>
