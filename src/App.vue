<template>
  <div id="app">
    <categories />
  </div>
</template>

<script>
import categories from "./components/categories.vue";

export default {
  name: "App",
  components: {
    categories,
  },
  mounted() {},
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
