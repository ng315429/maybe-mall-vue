<template>
  <div>
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="backRouter">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </md-toolbar>

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
    backRouter() {
      this.$router.go(-1);
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
