<template>
  <div class="search-wrap">
    <md-field md-clearable class="search-input">
      <label>어떤게 고민이신가요?</label>
      <md-input v-model="search"></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style scoped lang="scss">
.search-wrap {
  background-color: #fff;
  label {
    font-size: 1.2rem;
  }
}
</style>
