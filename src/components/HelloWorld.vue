<template>
  <div >
    <!-- <h1>{{ url }}</h1> -->
    <button @click="getMe">Кто я?</button>
    <button type="button" @click="getLoginInfo">Токен</button>
    <button type="button" @click="refreshToken">Refresh</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      url: process.env.VUE_APP_URL,
      // title: process.env.VUE_APP_TITLE
    }
  },
  props: {
    // msg: String
  },
  methods: {
    getMe(){
      get_me_jwt(
        process.env.VUE_APP_URL, 
        this.$store.state.LoginInfo.body.token_type, 
        this.$store.state.LoginInfo.body.access_token
        ).then((response)=>{
          console.log(response.body);
        });
      
    },
    refreshToken(){
      refresh_jwt(
        process.env.VUE_APP_URL, 
        this.$store.state.LoginInfo.body.token_type, 
        this.$store.state.LoginInfo.body.access_token
        ).then((response)=>{
          if (response.status === 200){
            console.log(response.body);
            this.$store.commit('setLoginInfo', response)          
          }
        });
      
    },
    getLoginInfo(){
      console.log(this.$store.state.LoginInfo.body);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
