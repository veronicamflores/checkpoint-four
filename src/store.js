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
    setPlayerHand(){},
    setTargetHand(){},
    setGame(){}
  },
  actions: {
    getGame({commit, dispatch}, gameId){
      gameApi.get('cards/' +gameId)
      .then(res=>{
        commit('setGame', res.data)
      })
    },
    startGame({commit, dispatch}, gameConfig){
      gameApi.post('cards',{} )
      .then(res=>{
        commit('setGame', res.data.game)
      })
    },
    getPlayerHand(){

    },
    getTargetHand(){
      
    }
  }
})
