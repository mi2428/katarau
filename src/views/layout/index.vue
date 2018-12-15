<template>
  <div>
    <header-toolbar/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderToolbar from "./components/header_toolbar.vue";


export default {
  name: "Layout",
  components: {
    HeaderToolbar
  }
};
</script>

<style scoped lang="scss">
</style>
