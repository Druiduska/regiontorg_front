export default {
    data() {
        return {
            errAuthText: [],
        }
    },
    methods: {
        loginJwt() {
            this.errAuthText = [];
            let s_login = this.$refs["dlg_login_login"].value
            let s_password = this.$refs["dlg_login_pass"].value

            this.login_jwt(process.env.VUE_APP_URL, s_login, s_password).then((response) => {
                this.$store.commit('setLoginInfo', false)
                if (response.status > 200 && response.status < 400) {
                    this.$store.commit("setLoginInfo", false);
                    return;
                }
                switch (response.status) {
                    case 200:
                        this.$store.commit('setLoginInfo', response)
                        this.errText = [];
                        this.closeModal();
                        break;
                    case 401:
                        this.$store.commit("setLoginInfo", false);
                        this.errText = ["Неверный логин или пароль"];
                        break;
                    default:
                        this.$store.commit("setLoginInfo", false);
                        this.errText = ["Ошибка системы авторизации.", "Обратитесь к системному администратору."];
                }
            })
        },
        refreshTokenJwt(on_status_200) {
            this.refresh_jwt(
                process.env.VUE_APP_URL,
                this.$store.state.LoginInfo.body.token_type,
                this.$store.state.LoginInfo.body.access_token
            ).then((response) => {
                if (response.status === 200) {
                    this.$store.commit('setLoginInfo', response)
                    if (typeof on_status_200 === "function") {
                        on_status_200();
                      }
                } else {
                    this.$store.commit("setLoginInfo", false);
                }
            });
        },
        logoutJwt() {
            this.logout_jwt(
                process.env.VUE_APP_URL,
                this.$store.state.LoginInfo.body.token_type,
                this.$store.state.LoginInfo.body.access_token
            ).then(() => {
                this.$store.commit("setLoginInfo", false);
            });
        },
        registerJwt(){
            let s_username = this.$refs["register_username"].value
            let s_email = this.$refs["register_email"].value
            let s_login = this.$refs["register_login"].value
            let s_password = this.$refs["register_password"].value
            this.register_jwt(process.env.VUE_APP_URL, 
                        s_username, 
                        s_email,  
                        s_login, 
                        s_password)
          },
    },
}