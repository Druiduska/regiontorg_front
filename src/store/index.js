import { createStore } from 'vuex'

export default createStore({
  state: {
    LoginInfo: false,
    isLoginDialogVisible: false,
  },
  mutations: {
    setLoginInfo(state, LoginInfo){
      state.LoginInfo = LoginInfo
    },
    setLoginDialogVisible(state, isLoginDialogVisible){
      state.isLoginDialogVisible = isLoginDialogVisible
    }
  },
  actions: {
  },
  modules: {
  }
})
