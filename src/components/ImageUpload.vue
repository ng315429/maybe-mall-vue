<template>
  <div>
    <div class="img-container">
      <label :for="imgId">
        <div v-if="this.uploadImg.length">
          <div
            class="img-box"
            v-for="(item, index) in this.uploadImg"
            :key="item"
          >
            <img :src="item" />
            <span class="img__remove" @click.prevent="removeImg(index)">x</span>
          </div>
        </div>
        <div v-else>
          <template v-if="showLoading">
            <div class="lading-spinner">
              <md-progress-spinner
                class="md-accent"
                :md-diameter="30"
                md-mode="indeterminate"
              ></md-progress-spinner>
            </div>
          </template>
          <template v-else>
            <p>UPLOAD</p>
          </template>
        </div>
      </label>
      <input
        type="file"
        :id="imgId"
        name="imageA"
        class="img-input"
        multiple
        @change.prevent="imgUploadRequest"
      />
    </div>
  </div>
</template>

<script>
import { apiFileUpload } from '@/api/common';
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
    // uploadImg: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  data() {
    return {
      uploadImg: [],
      showLoading: false,
    };
  },
  methods: {
    removeImg(index) {
      this.uploadImg.splice(index, 1);
      this.$emit('imgRemove', index);
    },
    imgUploadRequest(input) {
      if (this.limit < input.target.files.length) {
        alert(`${this.limit}개 제한`);
        return;
      }

      if (this.limit === this.uploadImg.length) {
        alert(`${this.limit}개 제한`);
        return;
      }

      if (input.target.files && input.target.files[0]) {
        const formData = new FormData();
        const fileList = input.target.files;
        fileList.forEach(item => {
          formData.append('files', item);
        });
        try {
          this.showLoading = true;
          apiFileUpload(formData).then(({ data }) => {
            this.showLoading = false;
            const resFileList = data.files;
            let uploadImgValue = '';
            resFileList.forEach((file, index) => {
              uploadImgValue = `${process.env.VUE_APP_AWS_CLOUD_FRONT}/${file.key}`;
              const reader = new FileReader();
              reader.readAsDataURL(fileList[index]);
              reader.onload = () => {
                this.uploadImg.push(reader.result);
              };
              this.$emit('imgUpload', uploadImgValue);
            });
          });
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
  },
};
</script>

<style scoped lang="scss">
.img-container {
  position: relative;
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15rem;
    background: #f0f0ec;
    border: 2px solid #e1e1df;
    border-radius: 1rem;
    > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .img-box {
        position: relative;
        > .img__remove {
          position: absolute;
          top: 2px;
          right: 2px;
          font-size: 40px;
        }
      }
      .lading-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }
    }
  }
  .img-input {
    //display: none;
    visibility: hidden;
  }
}
</style>
