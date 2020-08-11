<template>
  <div class="item-header-wrap">
    <div>
      <span>{{ this.category }}</span>
    </div>
    <div>
      <span>{{ this.reGender }}</span>
      <span>{{ this.age }}세</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  computed: {
    reGender() {
      return this.gender === 'male' ? '남' : '여';
    },
  },
};
</script>

<style scoped lang="scss">
.item-header-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  height: 3.5rem;
  > div {
    display: flex;
    &:nth-child(2) {
      justify-content: space-around;
    }
    width: 50%;
    span {
      font-size: 1.2rem;
    }
  }
}
</style>
