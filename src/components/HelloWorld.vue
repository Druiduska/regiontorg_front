<template>
  <div >
    <!-- <h1>{{ url }}</h1> -->
    <button @click="getMe">Кто я?</button>
    <button type="button" @click="getLoginInfo">Токен</button>
    <button type="button" @click="refreshTokenJwt()">Refresh</button>
    <button type="button" @click="getPosts">Посты</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      url: process.env.VUE_APP_URL,
    }
  },
  methods: {
    getMe(){
      this.get_me_jwt(
        process.env.VUE_APP_URL, 
        this.$store.state.LoginInfo.body.token_type, 
        this.$store.state.LoginInfo.body.access_token
        ).then((response)=>{
          console.log(response.body);
        });
      
    },
    getLoginInfo(){
      console.log(this.$store.state.LoginInfo);
      console.log(this.$store.state.LoginInfo.body);
    },
    getPosts(){
    // this.$store.state.Posts.array.forEach(element => {
  
    // });
      console.log(this.$store.state.Posts[0].title);
    }
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
