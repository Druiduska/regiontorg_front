<template>
  <div class="auth__menu">
    <button 
      type="button" 
      class="auth__btn" 
      @click="showLoginDialog"
      v-show="Boolean($store.state.LoginInfo)?false:true">
      <img src="images/menu_login_black.svg" class="auth__btn__image" />
      <span class="auth__btn__title">Войти</span>
    </button>
    <button
      type="button"
      class="auth__btn"
      @click="go_logout"
      v-show="Boolean($store.state.LoginInfo)"
    >
      <img src="images/menu_logout_black.svg" class="auth__btn__image" />
      <span class="auth__btn__title">Выйти</span>
    </button>
        <button
      type="button"
      class="auth__btn"
      @click="go_register"
    >
      <img src="images/person_add_black.svg" class="auth__btn__image" />
      <span class="auth__btn__title">Зарегестрировать</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "AuthMenu",
  methods: {
    showLoginDialog() {
      this.$store.commit("setLoginDialogVisible", true);
    },
    closeLoginDialog() {
      this.$store.commit("setLoginDialogVisible", false);
    },
    go_logout() {
      logout__jwt(
        process.env.VUE_APP_URL,
        this.$store.state.LoginInfo.body.token_type,
        this.$store.state.LoginInfo.body.access_token
      ).then(() => {
        this.$store.commit("setLoginInfo", null);
      });
    },
    go_register(){
      this.$router.push('/registration')
    },
  },
};
</script>
<style scoped>
@import "/styles/auth-menu.css";
</style>
