<template>
  <div>
    <question-detail-form></question-detail-form>
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
    QuestionDetailForm: () => import('@/components/QuestionDetailForm'),
  },
};
</script>

<style scoped lang="scss"></style>
