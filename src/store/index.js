import { createStore } from 'vuex'

export default createStore({
  state: {
    Posts: [],
    LoginInfo: false,
    isLoginDialogVisible: false,
  },
  mutations: {
    setLoginInfo(state, LoginInfo){
      state.LoginInfo = LoginInfo
    },
    setLoginDialogVisible(state, isLoginDialogVisible){
      state.isLoginDialogVisible = isLoginDialogVisible
    },
    setPosts(state, posts){
      state.Posts=posts;
    }
  },
  actions: {
  },
  modules: {
  }
})
