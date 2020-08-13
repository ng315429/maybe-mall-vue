<template>
  <div>
    <question-detail-form></question-detail-form>
  </div>
</template>

<script>
// import { apiFetchAuthQuestionOne } from '@/api/questions';
export default {
  data() {
    return {
      // category: '',
      // question: {},
      // questionItems: [],
    };
  },
  components: {
    QuestionDetailForm: () => import('@/components/QuestionDetailForm'),
  },
  methods: {},
  created() {},
};
</script>

<style scoped lang="scss"></style>
