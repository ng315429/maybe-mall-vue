<template>
  <div class="list-wrap">
    <question-search></question-search>

    <div class="list-area">
      <question-item
        v-for="item in questionList"
        :key="item.id"
        :question="item"
      ></question-item>
    </div>

    <div class="add-btn" @click="$router.push('/question/add')">
      <md-icon>edit</md-icon>
    </div>
  </div>
</template>

<script>
// import { apiFetchQuestions } from '@/api/questions';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      // questionList: [],
      pageNum: 1,
      questionTotalCount: 0,
      pageTotal: 1,
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      questionList: 'getQuestions',
    }),
  },
  methods: {
    async onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 300 &&
        this.loading === false &&
        this.pageNum < this.pageTotal
      ) {
        try {
          this.pageNum++;
          this.loading = true;
          await this.getQuestions();
          this.loading = false;
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
      }
    },
    async getQuestions() {
      try {
        // const { data } = await apiFetchQuestions(this.pageNum);
        const { data } = await this.$store.dispatch('FETCH_QUESTIONS', {
          page: this.pageNum,
          init: true,
        });
        this.pageNum = data.page_num;
        this.pageTotal = data.page_total;
        this.questionTotalCount = data.total_count;

        // this.questionList.push(...data.questions);
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
  components: {
    QuestionItem: () => import('@/components/QuestionItem'),
    QuestionSearch: () => import('@/components/QuestionSearch'),
  },
  created() {
    this.getQuestions();
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped lang="scss">
.list-wrap {
  background-color: $main-background-color;
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
