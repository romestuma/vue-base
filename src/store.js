import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientes: [
      {
        id: 1,
        nome: "Romes 00",
        email: "rs@gmail.com",
        fone: "65665656",
        conta: "conta1"
      },
      {
        id: 2,
        nome: "Romes2",
        email: "rs@gmail.com",
        fone: "65665656",
        conta: "conta1"
      },
      {
        id: 3,
        nome: "Romes3",
        email: "rs@gmail.com",
        fone: "65665656",
        conta: "conta1"
      },
      {
        id: 4,
        nome: "Romes4",
        email: "rs@gmail.com",
        fone: "65665656",
        conta: "conta1"
      }
    ]
  },
  mutations: {
    CHANGE_CLIENTE(state, payload) {
      state.clientes = payload
    },
    CLEAR_CLIENTE(state, payload) {
      state.clientes = []
    }
  },
  actions: {

  }
})
