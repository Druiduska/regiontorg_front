<template>
  <div>
    <button
    type="button"
    class="btn"
    @click="showLoginDialog"
    >
        Login
    </button>
    <button
    type="button"
    class="btn"
    @click="go_logout"
    v-show="Boolean($store.state.LoginInfo)"
    >
        Logout
    </button>
  </div>
</template>
<script>
export default {
  name: "AuthMenu",
  methods: {
    showLoginDialog() {
        this.$store.commit('setLoginDialogVisible', true)
    },
    closeLoginDialog() {
        this.$store.commit('setLoginDialogVisible', false)
    },
    go_logout(){
        logout__jwt(process.env.VUE_APP_URL,
                    this.$store.state.LoginInfo.body.token_type, 
                    this.$store.state.LoginInfo.body.access_token).then(()=>{
                        this.$store.commit('setLoginInfo', null)
                    })
    },
  },
};
</script>
<style scoped>
</style>