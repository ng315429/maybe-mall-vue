<template>
  <div class="item-header-wrap">
    <div>
      <span>카테고리</span>
    </div>
    <div>
      <span>성별</span>
      <span>나이대</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.item-header-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  height: 3.5rem;
  > div {
    display: flex;
    &:nth-child(2) {
      justify-content: space-around;
    }
    width: 50%;
    span {
      font-size: 1.2rem;
    }
  }
}
</style>
