<template>
  <div id="app">
    <NavbarHeader></NavbarHeader>
    <router-view></router-view>
    <ModalContent></ModalContent>
  </div>
</template>

<script>
import NavbarHeader from "./components/NavbarHeader.vue";
import ModalContent from "./components/ModalContent.vue";

export default {
  name: "App",
  components: {
    NavbarHeader,
    ModalContent,
  },
};
</script>

<style scoped>
#app {
}
</style>
