import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'
import ActiveGame from './views/ActiveGame.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path:'/cards/:gameId',
      name:'activeGame',
      component: ActiveGame
    }
  ]
})
