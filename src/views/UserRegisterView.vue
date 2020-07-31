<template>
  <div>
    <user-register-form></user-register-form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    UserRegisterForm: () => import('@/components/UserRegisterForm'),
  },
};
</script>

<style scoped lang="scss"></style>
