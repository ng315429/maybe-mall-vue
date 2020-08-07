<template>
  <div class="modal-wrap">
    <div class="login-area">
      <form @submit.prevent="onSubmit">
        <h2 class="login-header">로그인</h2>

        <md-field md-clearable>
          <label>ID</label>
          <md-input v-model="username"></md-input>
        </md-field>
        <md-field>
          <label>PASSWORD</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>

        <div class="btn-box">
          <md-button class="md-raised" type="submit">
            로그인
          </md-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      const user = {
        username: this.username,
        password: this.password,
      };
      try {
        const { data } = await this.$store.dispatch('ACCESS_TOKEN', user);
        if (data.access_token && data.refresh_token) {
          this.$router.push('/');
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
        console.log(error.config);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.modal-wrap {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-area {
    position: relative;
    border-radius: 1rem;
    padding: 1.5rem 1.5rem;
    width: 30rem;
    background-color: #fff;

    .login-header {
      display: flex;
      position: relative;
    }
    .btn-box {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
