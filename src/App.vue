<template>
  <div id="app">
    <categories />
    <collections />
    <videos />
    <video1 />
  </div>
</template>

<script>
import categories from "./components/categories.vue";
import collections from "./components/collections.vue";
import videos from "./components/videos.vue";
import video1 from "./components/video.vue";

export default {
  name: "App",
  components: {
    categories,
    collections,
    videos,
    video1
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
