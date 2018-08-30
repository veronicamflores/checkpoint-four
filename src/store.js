import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let gameApi = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game:{},
    playerHand:{},
    targetHand:{},

  },
  mutations: {
    setPlayerHand(state, playerHand){},
    setTargetHand(state, targetHand){},
    setGame(state, game){
      state.game = game
      router.push({gameId: game.id})
    }
  },
  actions: {
    startGame({commit, dispatch}, gameConfig){
      gameApi.post('', {})
      .then(res=>{
        commit('setGame', res.data.game )
      })
    },
    getGame(){},
    getPlayerHand(){},
    getTargetHand(){}
  }
})
