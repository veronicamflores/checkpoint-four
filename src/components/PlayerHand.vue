<template>
  <div class="player-hand row" >
      <div class="col-12"><h1>{{playerHand.name}}</h1></div>
      <div v-for="hand in playerHand.hand" :key="hand.id" class="col-3">
        <div class="card" @click="activeHand(playerHand)">
          <img :src="hand.img" class="card-img-top" alt=""/>
          <div class="card-body">
            <h2>Card Name: {{hand.name}}</h2>
            <h3>Health: {{hand.health}}</h3>
            <h3>Attack: {{hand.attack}}</h3>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerHand',
  computed: {
    playerHand(){
      if(this.$store.state.game.id){
         return this.$store.state.game.players[0]
      }
      return {}
    },
    playerActiveHand(){
    return this.$store.state.playerHand
  }
  },
  methods:{
    activeHand(playerHand){
      this.$store.dispatch('setPlayerHand', playerHand)
    }
  }
 
};
</script>