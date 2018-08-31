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
    setPlayerHand(state, hand){
      state.playerHand = hand[0]
      state.targetHand = hand[1]
    },

    setGame(state, game){
      state.game = game
    }
  },
  actions: {
    startGame({commit, dispatch}, gameConfig){
      gameApi.post('', gameConfig )
      .then(res=>{
        commit('setGame', res.data)
      })
    },

    getGame({commit, dispatch}, gameId){
      gameApi.get('/' + gameId)
      .then(res=>{
        commit('setGame', res.data)
      })
    },

    getHand({commit, dispatch}, gameId){
      gameApi.get('/', gameId)
      .then(res=>{
        commit('setHand', res.data.players)
      })
    }
  }
})
