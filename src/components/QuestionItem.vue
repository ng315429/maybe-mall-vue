<template>
  <div class="item-wrap">
    <md-card class="md-primary" md-theme="black-card">
      <question-item-header
        :gender="question.gender"
        :age="question.age"
        :category="question.category"
      ></question-item-header>

      <div class="img-area">
        <div class="img-box">
          <div class="img-section">
            <img :src="this.filterItem(question.items, 0, 'img')" />

            <div class="vote-check">
              <md-icon class="md-size-2x">check_circle_outline</md-icon>
            </div>
          </div>
          <button class="vote-btn" @click="voteItem(question.items[0].id)">
            투표
          </button>
        </div>
        <div class="divider"></div>
        <div class="img-box">
          <div class="img-section">
            <img :src="this.filterItem(question.items, 1, 'img')" />
            <!--            <div class="vote-check" :class="{ active: isActive }">-->
            <div class="vote-check">
              <md-icon class="md-size-2x">done</md-icon>
            </div>
          </div>
          <button class="vote-btn" @click="voteItem(question.items[1].id)">
            투표
          </button>
        </div>
      </div>

      <div class="item-info-area">
        <question-item-input
          unit="이름"
          :leftValue="this.filterItem(question.items, 0, 'name')"
          :rightValue="this.filterItem(question.items, 1, 'name')"
        ></question-item-input>

        <question-item-input
          unit="브랜드"
          :leftValue="this.filterItem(question.items, 0, 'brand')"
          :rightValue="this.filterItem(question.items, 1, 'brand')"
        ></question-item-input>

        <question-item-input
          unit="가격"
          :leftValue="this.filterItem(question.items, 0, 'price')"
          :rightValue="this.filterItem(question.items, 1, 'price')"
        ></question-item-input>

        <question-item-input
          unit="링크"
          :leftValue="this.filterItem(question.items, 0, 'link')"
          :rightValue="this.filterItem(question.items, 1, 'link')"
        ></question-item-input>
      </div>

      <div class="item-description">
        <pre>{{ question.description }}</pre>
      </div>

      <!--      <div class="item-comment">-->
      <!--        <div class="comment-btn-box">-->
      <!--          <button class="comment-btn" @click="showComment">댓글 달기</button>-->
      <!--        </div>-->
      <!--        <div class="comment-content" v-if="showCommentCheck">-->
      <!--          댓글...-->
      <!--        </div>-->
      <!--      </div>-->
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isActive: true,
      showCommentCheck: false,
    };
  },
  components: {
    QuestionItemHeader: () => import('@/components/QuestionItemHeader'),
    QuestionItemInput: () => import('@/components/QuestionItemInput'),
  },
  methods: {
    filterItem(item, index, key) {
      if (item && item[index]) {
        return item[index][key];
      } else {
        return key === 'img' ? require('@/assets/no_image.jpg') : '';
      }
    },
    showComment() {
      this.showCommentCheck = !this.showCommentCheck;
    },
    voteItem(id) {
      console.log(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-wrap {
  background-color: #fff;
  margin: 1.5rem auto;
  .md-card {
    border-radius: 5px;
  }
  .img-area {
    display: flex;
    justify-content: space-between;

    .divider {
      width: 1px;
      background-color: #efefef;
    }
    .img-box {
      position: relative;
      width: 50%;
      height: 100%;
      .img-section {
        position: relative;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 150px;
        }
        .vote-check {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          position: absolute;
          background: #000;
          opacity: 0.5;
          color: #fff;
          display: none;

          &.active {
            display: flex;
          }
        }
      }

      .vote-btn {
        font-size: 1.2rem;
        width: 100%;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f29609;
        color: #fff;
        border-width: 0;
      }
    }
  }
  .item-info-area {
    padding: 1rem 0;
  }
  .item-description {
    border-top: 1px solid $main-border-color;
    border-bottom: 1px solid $main-border-color;
    padding: 1rem 1rem;
    width: 90%;
    margin: 0 auto;
    p {
      font-size: 1.3rem;
      word-break: break-all;
    }
  }
  .item-comment {
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
    .comment-btn-box {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        background-color: #fff;
        border: 0;
      }
    }
    .comment-content {
      width: 100%;
      padding: 1rem 1rem;
    }
  }
}
</style>
