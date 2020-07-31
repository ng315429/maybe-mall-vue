<template>
  <transition name="modal-fade">
    <div class="modal-wrap">
      <div class="model-back" @click="closeModal"></div>
      <div class="login-area">
        <div @click="closeModal">
          <md-icon class="md-size-1x close-btn">
            close
          </md-icon>
        </div>

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
          <md-button class="md-raised" @click="register">회원가입</md-button>
          <md-button class="md-raised" @click="login">로그인</md-button>
        </div>
      </div>
    </div>
  </transition>
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
    closeModal() {
      this.$EventBus.$emit('show-login', false);
    },
    register() {
      this.closeModal();
      console.log('register');
    },
    login() {
      this.closeModal();
      console.log('login');
    },
  },
};
</script>

<style scoped lang="scss">
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.5s ease;
}

.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  .model-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .login-area {
    position: relative;
    border-radius: 1rem;
    padding: 1.5rem 1.5rem;
    width: 30rem;
    background-color: #fff;

    .close-btn {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
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
