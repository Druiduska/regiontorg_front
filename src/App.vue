<template>
  <div class="app__container">
    <div id="nav" class="app__header">
      <Header msg="Welcome to Your Vue.js App" />
    </div>
    <router-view class="app__body" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import postsFetch from "@/mixins/posts_fetch.js";
export default {
  name: "App",
  components: {
    Header,
  },
  mixins: [postsFetch],
  mounted() {
    this.posts_all();
  },
};
</script>

<style>
@import "/styles/app.css";
</style>
