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
    player:[],
    target:[],
    targets:{},
    players:{}

  },
  mutations: {
    setPlayers(){},
    setPlayer(){},
    setTargets(){},
    setTarget(){},
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
      gameApi.post('cards',{ playerId: gameConfig.player.id, targetId: gameConfig.target.id } )
      .then(res=>{
        commit('setGame', res.data.game)
      })
    }
  }
})
