<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/avgle">Avgle</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    // console.log(this.$router);
  },
  computed: {
    home() {
      return this.$route.params.home;
    },
    avgle() {
      return this.$route.params.home;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
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
