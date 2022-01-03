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

  methods:{
    getAllPost(){
     fetch(process.env.VUE_APP_URL +'/api/posts/all', { method: 'POST', }).then((response)=>{
        response.json().then((rslt)=>{
          this.$store.commit('setPosts', rslt)
          })
     });      
    }
  },
  beforeCreate(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '/lib/posts.js')
    document.head.appendChild(recaptchaScript)
  },
  mounted() {
    this.getAllPost();
  },
};
</script>

<style>
@import "/styles/app.css";
</style>
