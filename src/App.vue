<template>
  <div class="main-wrap" id="app">
    <div class="main-area">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.main-wrap {
  width: 100%;
  margin: 0 auto;
  background-color: #f7f7f5;
  .main-area {
    width: 100%;
    max-width: 414px;
    margin: 0 auto;
    border: 1px solid $main-color;
  }
}
</style>
