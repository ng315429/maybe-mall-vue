<template>
  <div class="input-box">
    <div>
      {{ leftValue }}
    </div>
    <div>{{ unit }}</div>
    <div>{{ rightValue }}</div>
  </div>
</template>

<script>
export default {
  props: {
    unit: {
      type: String,
      default: '',
    },
    leftValue: {
      // type: String,
      default: '',
    },
    rightValue: {
      // type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.input-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid $main-border-color;
  border-radius: 5px;
  width: 90%;
  height: 35px;
  margin: 10px auto;
  font-size: 1rem;
  div {
    text-align: center;
  }
  > div:nth-child(1) {
    width: 40%;
  }
  > div:nth-child(2) {
    width: 35px;
    height: 100%;
    line-height: 35px;
    background-color: #f0ece6;
    border-right: 1px solid $main-border-color;
    border-left: 1px solid $main-border-color;
  }
  > div:nth-child(3) {
    width: 40%;
  }
}
</style>
