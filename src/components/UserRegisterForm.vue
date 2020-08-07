<template>
  <div class="register-wrap">
    <form @submit.prevent="onSubmit">
      <h1>회원가입</h1>
      <md-field md-clearable>
        <label>아이디</label>
        <md-input v-model="username"></md-input>
      </md-field>

      <md-field md-clearable :md-toggle-password="false">
        <label>비밀번호</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-field md-clearable :md-toggle-password="false">
        <label>비밀번호 확인</label>
        <md-input v-model="rePassword" type="password"></md-input>
      </md-field>

      <md-field md-clearable>
        <label>이름</label>
        <md-input v-model="name"></md-input>
      </md-field>

      <md-field md-clearable>
        <label>이메일</label>
        <md-input v-model="email"></md-input>
      </md-field>

      <md-field>
        <label for="movie">나이대</label>
        <md-select v-model="age" name="movie" id="movie">
          <md-option value="1">1~9</md-option>
          <md-option value="10">10~19</md-option>
          <md-option value="20">20~29</md-option>
          <md-option value="30">30~39</md-option>
          <md-option value="40">40~49</md-option>
          <md-option value="50">50~59</md-option>
          <md-option value="60">60~69</md-option>
          <md-option value="70">70~79</md-option>
          <md-option value="80">80~89</md-option>
          <md-option value="90">90~99</md-option>
          <md-option value="100">100~</md-option>
        </md-select>
      </md-field>

      <div class="register-btn-area">
        <md-button class="md-raised" type="submit">회원가입</md-button>
      </div>
    </form>
  </div>
</template>

<script>
import { apiRegisterUser } from '@/api/auth';
export default {
  data() {
    return {
      username: '',
      password: '',
      rePassword: '',
      name: '',
      email: '',
      age: '',
    };
  },
  methods: {
    async onSubmit() {
      const userData = {
        username: this.username,
        password: this.password,
        name: this.name,
        email: this.email,
        age: this.age,
      };
      try {
        const { data } = await apiRegisterUser(userData);
        if (data.username) {
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
.register-wrap {
  padding: 2rem 1rem;
  background-color: #fff;
  .register-btn-area {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem auto 2rem;
  }
}
</style>
