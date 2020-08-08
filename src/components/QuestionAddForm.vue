<template>
  <div class="add-wrap">
    <form @submit.prevent="onSubmit">
      <h1>질문 등록</h1>
      <md-field md-clearable>
        <label>제목</label>
        <md-input v-model="title"></md-input>
      </md-field>

      <md-field>
        <label>카테고리</label>
        <md-select v-model="category" id="category" name="category">
          <md-option value="1">의류</md-option>
        </md-select>
      </md-field>

      <div class="add-section">
        <div class="add-area">
          <image-upload
            @imgUpload="imageUpload01"
            @imgRemove="imageRemove01"
            :limit="1"
            imgId="img01"
          ></image-upload>
          <md-field md-clearable>
            <label>제품명</label>
            <md-input v-model="item01.name"></md-input>
          </md-field>
          <md-field md-clearable>
            <label>브랜드</label>
            <md-input v-model="item01.brand"></md-input>
          </md-field>
          <md-field md-clearable>
            <label>가격</label>
            <md-input v-model="item01.price" type="number"></md-input>
          </md-field>
          <md-field md-clearable>
            <label>링크</label>
            <md-input v-model="item01.link"></md-input>
          </md-field>
        </div>
        <div class="add-area">
          <image-upload
            @imgUpload="imageUpload02"
            @imgRemove="imageRemove02"
            :limit="1"
            imgId="img02"
          ></image-upload>
          <md-field md-clearable>
            <label>제품명</label>
            <md-input v-model="item02.name"></md-input>
          </md-field>
          <md-field md-clearable>
            <label>브랜드</label>
            <md-input v-model="item02.brand"></md-input>
          </md-field>
          <md-field md-clearable>
            <label>가격</label>
            <md-input v-model="item02.price" type="number"></md-input>
          </md-field>
          <md-field md-clearable>
            <label>링크</label>
            <md-input v-model="item02.link"></md-input>
          </md-field>
        </div>
      </div>

      <div>
        <md-field>
          <label>내용</label>
          <md-textarea v-model="description"></md-textarea>
          <md-icon>description</md-icon>
        </md-field>
      </div>

      <div class="upload-btn">
        <md-button class="md-raised" type="submit">
          질문 등록
        </md-button>
      </div>
    </form>
  </div>
</template>

<script>
import { apiAddQuestion } from '@/api/questions';

export default {
  data() {
    return {
      category: '',
      description: '',
      title: '',

      uploadImg01: [],
      uploadImg02: [],

      item01: {
        name: '',
        brand: '',
        price: '',
        link: '',
      },
      item02: {
        name: '',
        brand: '',
        price: '',
        link: '',
      },
    };
  },
  components: {
    imageUpload: () => import('@/components/ImageUpload'),
  },
  methods: {
    imageRemove01(index) {
      this.uploadImg01.splice(index, 1);
    },
    imageRemove02(index) {
      this.uploadImg02.splice(index, 1);
    },
    imageUpload01(img) {
      this.uploadImg01.push(img);
    },
    imageUpload02(img) {
      this.uploadImg02.push(img);
    },
    async onSubmit() {
      const questionData = {
        title: this.title,
        description: this.description,
        category: parseInt(this.category),
        item01: {
          name: this.item01.name,
          brand: this.item01.brand,
          price: parseInt(this.item01.price),
          link: this.item01.link,
          img: this.uploadImg01[0],
        },
        item02: {
          name: this.item02.name,
          brand: this.item02.brand,
          price: parseInt(this.item02.price),
          link: this.item02.link,
          img: this.uploadImg02[0],
        },
      };
      try {
        const { data } = await apiAddQuestion(questionData);
        if (data.code === 200) {
          // this.$router.push('/');
        }
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
};
</script>

<style scoped lang="scss">
.add-wrap {
  padding: 2rem 1rem;
  background-color: #fff;
}

.add-section {
  display: flex;
  justify-content: space-between;

  .add-area {
    display: flex;
    flex-direction: column;
    width: 49%;
  }
}

.upload-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
}
</style>
