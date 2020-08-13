<template>
  <div>
    <question-detail-form></question-detail-form>
  </div>
</template>

<script>
import { apiFetchAuthQuestionOne } from '@/api/questions';
export default {
  data() {
    return {
      category: '',
    };
  },
  components: {
    QuestionDetailForm: () => import('@/components/QuestionDetailForm'),
  },
  methods: {
    async getQuestionOne() {
      const questionId = this.$route.params.id;
      const { data } = await apiFetchAuthQuestionOne(questionId);
      console.log(data);
    },
  },
  created() {
    this.getQuestionOne();
  },
};
</script>

<style scoped lang="scss"></style>
