<template>
  <div class="list-wrap">
    <question-search></question-search>

    <div class="list-area">
      <question-item></question-item>
      <question-item></question-item>
    </div>

    <div class="add-btn">
      <md-icon>edit</md-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    QuestionItem: () => import('@/components/QuestionItem'),
    QuestionSearch: () => import('@/components/QuestionSearch'),
  },
};
</script>

<style scoped lang="scss">
.list-wrap {
  background-color: $main-background-color;
  padding: 1rem 1rem;
  .list-area {
    padding: 0rem 0.5rem;
  }
  .add-btn {
    border-radius: 50%;
    display: flex;
    width: 4rem;
    height: 4rem;
    background-color: #dce8bf;
    position: fixed;
    bottom: 2rem;
    left: 2rem;
  }
}
</style>
