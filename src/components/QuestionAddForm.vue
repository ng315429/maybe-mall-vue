<template>
  <div class="add-wrap">
    <form v-on:submit.prevent="onSubmit">
      <md-field>
        <label for="category">카테고리</label>
        <md-select v-model="category" name="category">
          <md-option value="cate01">카테고리1</md-option>
        </md-select>
      </md-field>

      <div class="add-section">
        <div class="add-area">
          <image-upload
            @imgUploadRequest="imageUpload01"
            :limit="1"
            imgId="img01"
            :uploadImg="uploadImg01"
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
            @imgUploadRequest="imageUpload02"
            :limit="1"
            imgId="img02"
            :uploadImg="uploadImg02"
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

      <div class="upload-btn">
        <md-button class="md-raised" type="submit">
          질문 올리기
        </md-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: '',

      uploadImg01: [],
      uploadImg02: [],

      item01: {
        name: '',
        brand: '',
        price: 0,
        link: '',
      },
      item02: {
        name: '',
        brand: '',
        price: 0,
        link: '',
      },
    };
  },
  components: {
    imageUpload: () => import('@/components/ImageUpload'),
  },
  methods: {
    imageUpload01(img) {
      console.log('imageUpload01');
      console.log(img);
    },
    imageUpload02(img) {
      console.log('imageUpload02');
      console.log(img);
    },
    onSubmit() {
      console.log('onSubmit');
      this.$router.push('/');
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
