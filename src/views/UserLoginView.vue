<template>
  <div>
    <user-login-form></user-login-form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    UserLoginForm: () => import('@/components/UserLoginForm'),
  },
};
</script>

<style scoped lang="scss"></style>
