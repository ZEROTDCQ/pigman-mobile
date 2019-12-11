<template>
  <div class="category" v-show="showr">
    <CategoryFilter @category="categoryr" />
    <CategoryBody v-if="twoid" :twoidr="twoid" />
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
  },
  data() {
    return {
      showr: true,

      twoid: null
    };
  },
  mounted() {},
  methods: {
    categoryr(son) {
      this.twoid = son;
      console.log("一级", this.twoid);
    }
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