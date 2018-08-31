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
    targetHand:{}

  },
  mutations: {
    setTargetHand(state, hand){
      state.targetHand = hand
    },
    setPlayerHand(state, hand){
      state.playerHand = hand
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
    getTargetHand({commit, dispatch}, gameId){
      gameApi.get('/', gameId)
      .then(res=>{
        commit('setTargetHand', res.data.players)
      })
    },
    getPlayerHand({commit, dispatch}, gameId){
      gameApi.get('/', gameId)
      .then(res=>{
        commit('setPlayerHand', res.data.players)
      })
    }
  }
})
