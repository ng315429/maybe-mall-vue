<template>
  <div class="search-wrap">
    <md-field class="search-input">
      <md-select
        v-model="category"
        name="category"
        id="category"
        placeholder="카테고리"
        @md-selected="categorySelect"
      >
        <md-option value="" selected>전체</md-option>
        <md-option
          :value="category.id"
          v-for="category in categories"
          :key="category.id"
          >{{ category.name }}</md-option
        >
      </md-select>
    </md-field>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      search: '',
      category: '',
    };
  },
  computed: {
    ...mapGetters({
      categories: 'getCategories',
    }),
  },

  methods: {
    categorySelect(value) {
      this.$emit('selectCategory', value);
    },
    async getCategories() {
      await this.$store.dispatch('FETCH_CATEGORIES');
    },
  },
  created() {
    this.getCategories();
  },
};
</script>

<style scoped lang="scss">
.search-wrap {
  background-color: #fff;
  .search-input {
    text-indent: 1rem;
    label {
      font-size: 1.2rem;
    }
    .md-input {
      text-indent: 1rem;
    }
  }
}
</style>
