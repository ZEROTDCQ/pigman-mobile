<template>
  <div class="menuclass">
    <MenuBanner/>
    <MenuClassBody/>
  </div>
</template>



<script>
import MenuBanner from "./components/MenuBanner";
import MenuClassBody from "./components/MenuClassBody";

export default {
  components: {
    MenuBanner,
    MenuClassBody
  }
}
</script>