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

export default {
  name: "App",
  components: {
    Header,
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '/lib/posts.js')
    document.head.appendChild(recaptchaScript)
    setTimeout( ()=>{posts_all(process.env.VUE_APP_URL).then((response)=>{
          this.$store.commit('setPosts', response)})}, 10);
  },
};
</script>

<style>
@import "/styles/app.css";
</style>
