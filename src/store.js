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
    setPlayerHand(state, playerHand){
      state.playerHand = playerHand
    },
    setTargetHand(state, targetHand){
      state.targetHand = targetHand
    },
    setGame(state, game){
      state.game = game
      router.push({gameId: game.id})
    }
  },
  actions: {
    startGame({commit, dispatch}, gameConfig){
      gameApi.post('', gameConfig )
      .then(res=>{
        commit('setGame', res.data.results)
      })
    },
    getTargetHand({commit, dispatch}){
      gameApi.get('/:gameId')
      .then(res=>{
        commit('setTargetHand', res.data.players[1])
      })
    },
    getPlayerHand({commit, dispatch}){
      gameApi.get('/:gameId')
      .then(res=>{
        commit('setPlayerHand', res.data.players[0])
      })
    },
  }
})
