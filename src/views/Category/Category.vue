<template>
  <div class="category">
    <CategoryFilter />
    <CategoryBody />
  </div>
</template>

<script>
// 顶部筛选
import CategoryFilter from "./components/CategoryFilter";
// 主体
import CategoryBody from "./components/CategoryBody";
export default {
  components: {
    CategoryFilter,
    CategoryBody
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
.category {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>