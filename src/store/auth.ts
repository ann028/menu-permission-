const auth = {
  state: {
    userId: window.sessionStorage.getItem('userId') || NaN,
    token: window.sessionStorage.getItem('token') || ''
  },
  mutations: {
    SET_USER(state: any, data: any){
      state.userId = data.userId
      state.token = data.token

      window.sessionStorage.setItem('userId', data.userId)
      window.sessionStorage.setItem('token', data.token)
    }
  },
  actions: {
    saveUser({commit}: any, data: any){
      commit('SET_USER', data)
    }
  }
}
export default auth