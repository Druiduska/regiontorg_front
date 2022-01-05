<template>
  <div class="registration__container">
    <div class="auth__box">
      <div class="auth__wrapper">
        <h2 class="auth__box2">Регистрация пользователя</h2>
      </div>
      <div>
        <label class="auth__fields">
          <span>Имя:</span>
          <input id="username" name="username" type="text" ref="register_username"/>
        </label>
        <label class="auth__fields">
          <span>e-maile:</span>
          <input id="email" name="email" type="email" ref="register_email"/>
        </label>
        <label class="auth__fields">
          <span>Логин:</span>
          <input id="login" name="name" type="text" ref="register_login"/>
        </label>
        <label class="auth__fields">
          <span>Пароль:</span>
          <input id="password" name="password" type="password" ref="register_password"/>
        </label>
      </div>
      <footer class="registration__footer">
        <button type="button" @click="on_cancel">Отмена</button>
        <button type="button" @click="registerJwt" style="margin-left: 0.3rem">
          Зарегестрировать
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddUser",
  methods: {
      on_cancel (){
          this.$router.go(-1)
      },
  },
};
</script>
<style scoped>
    @import "/styles/auth.css"
</style>

