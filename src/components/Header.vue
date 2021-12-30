<template>
  <div>
    <header class="header">
      <nav class="header__nav">
        <div class="header__field__logo">
          <img class="logo__image" src="images/smart_toy_black_48dp.svg" alt="">
        </div>
        <div class=".header__field__menu">
          <SimpleMenu :menu_items="menuList" ></SimpleMenu>
        </div>
        <div class="header__field2">
        </div>
        <div class="header__field__auth">
          <AuthMenu></AuthMenu>
        </div>
      </nav>
    </header>
    <LoginDialog
      v-show="$store.state.isLoginDialogVisible"
      @close="closeLoginDialog"
    ></LoginDialog>
  </div>
</template>

<script>
import SimpleMenu from "/src/components/menus/simple_menu.vue";
import AuthMenu from "/src/components/menus/auth_menu.vue";
import LoginDialog from '/src/components/dialogs/login.vue';

export default {
  name: "Header",
      data () {
      return {
        isLoginVisible: false,
        menuList: [{title: 'Home', href: '/'}, {title: 'About', href: '/about'}],
      };
    },
  props: {
    msg: String,
  },
  components: {
    SimpleMenu,
    AuthMenu,
    LoginDialog,
  },
  //document.location.pathname
  methods: {
    closeLoginDialog() {
        this.$store.commit('setLoginDialogVisible', false)
    },
  },
};
</script>

<style scoped>
  .logo__image{
    margin: 0 0.5rem 0 0;
    width: 2rem;
  }
  .header__nav{
    display: flex;
    flex-direction: row;
    margin: 0 40px 0 10px;
    flex-wrap: wrap;
  }
  .header__field__logo{
      order: 0;
  }
  .header__field__menu{
      order: 1;
  }
  .header__field2{
      order: 2; flex: 2 0px;
  }
  .header__field__auth{
      order: 3;
  }
@import "/styles/auth.css"
</style>
