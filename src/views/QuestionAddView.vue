<template>
  <div>
    <question-add-form></question-add-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: '',
    };
  },
  components: {
    QuestionAddForm: () => import('@/components/QuestionAddForm'),
  },
};
</script>

<style scoped lang="scss"></style>
