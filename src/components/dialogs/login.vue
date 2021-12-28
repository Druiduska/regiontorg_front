<template>
  <div>
    <Modal @close="closeModal">
      <template v-slot:sign>
        <img src="images/login_black.svg" class="modal__login__image" />
      </template>
      <template v-slot:header>
        <div>Вход</div>
      </template>
      <template v-slot:body>
        <div class="modal__login__body">
          <label class="auth__fields">
            <span>Логин:</span>
            <input type="text" ref="dlg_login_login" value="admin" />
          </label>
          <label class="auth__fields">
            <span>Пароль:</span>
            <input type="password" ref="dlg_login_pass" value='123' />
          </label>
          <div v-for="(item, index) in errText" :key="index"> {{ item }} </div>
          <div class="modal__login__registration">
            <router-link @click="closeModal" to="/registration">
              Зарегистрироваться</router-link>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" @click="closeModal">Закрыть</button>
        <button type="button" @click="loginJwt" style="margin-left: 0.3rem">Войти</button>
      </template>
    </Modal>
  </div>
</template>
<script>

import Modal from "@/components/dialogs/modal.vue";

export default {
  name: "LoginDialog",
  components: {
    Modal,
  },
  data() {
    return {
      errText: [],
    }
  },
  methods: {
    closeModal() {
        this.$refs["dlg_login_login"].value=''
        this.$refs["dlg_login_pass"].value=''
        this.$emit('close');
    },
    loginJwt(){
        let s_login = this.$refs["dlg_login_login"].value
        let s_password = this.$refs["dlg_login_pass"].value

        login_jwt(process.env.VUE_APP_URL, s_login, s_password).then((response)=>{
          this.$store.commit('setLoginInfo', response)
          if ( response.status>200 && response.status < 400){
            return;
          }
          switch (response.status){
            case 200:
              this.$store.commit('setLoginInfo', response)
              this.errText=[];
              this.closeModal();
              break;
            case 401:
              this.errText=["Неверный логин или пароль"];
              break;
            default:
              this.errText=["Ошибка системы авторизации.", "Обратитесь к системному администратору."];
          }
        })
    },
  },
  mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '/lib/auth.js')
      document.head.appendChild(recaptchaScript)
    },
};
</script>
<style scoped>
    @import "/styles/login-dialog.css"
</style>