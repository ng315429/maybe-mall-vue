<template>
  <div>
    <question-detail-form></question-detail-form>
  </div>
</template>

<script>
// import { apiFetchQuestionOne } from '@/api/questions';
export default {
  data() {
    return {
      category: '',
    };
  },
  components: {
    QuestionDetailForm: () => import('@/components/QuestionDetailForm'),
  },
  created() {
    console.log(this.$route.params);
  },
};
</script>

<style scoped lang="scss"></style>
