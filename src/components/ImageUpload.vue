<template>
  <div>
    <div class="img-box">
      <label :for="imgId">
        <div v-if="this.uploadImg.length">
          <img :src="item" v-for="item in this.uploadImg" :key="item" />
        </div>
        <div v-else>
          UPLOAD
        </div>
      </label>
      <input
        type="file"
        :id="imgId"
        name="imageA"
        class="img-input"
        @change="imgUploadRequest"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    limit: {
      type: Number,
      default: 1,
    },
    imgId: {
      type: String,
      default: '',
    },
    uploadImg: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    imgUploadRequest(input) {
      if (this.limit === this.uploadImg.length) {
        alert(`${this.limit}개 제한`);
        return;
      }
      const uploadImgFileList = input.target.files;
      const uploadImgValue = input.target.value;
      console.log(uploadImgFileList, uploadImgValue);

      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader();
        reader.onload = input => {
          this.uploadImg.push(input.target.result);
        };
        reader.readAsDataURL(input.target.files[0]);
      }
      this.$emit('imgUploadRequest', uploadImgValue);
      // this.image01.push(e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.img-box {
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15rem;
    background: #f0f0ec;
    border: 2px solid #e1e1df;
    border-radius: 1rem;
  }
  .img-input {
    display: none;
  }
}
</style>
