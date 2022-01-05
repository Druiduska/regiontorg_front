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
          <div v-for="(item, index) in errAuthText" :key="index"> {{ item }} </div>
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
  methods: {
    closeModal() {
        this.errAuthText=[];
        this.$refs["dlg_login_login"].value='';
        this.$refs["dlg_login_pass"].value='';
        this.$emit('close');
    },
  },
};
</script>
<style scoped>
    @import "/styles/login-dialog.css"
</style>