<template>
  <div class="player-hand row" >
      <div class="col-12">
        <h1>{{playerHand.name}}</h1>
      </div>
      <div v-for="hand in playerHand.hand" :key="hand.id" class="col">
        <div class="card" @click="activeHand(hand)">
          <img :src="hand.img" class="card-img-top" alt=""/>
          <div class="card-body">
            <h6>Card Name: {{hand.name}}</h6>
            <p>Health: {{hand.health}}</p>
            <p>Attack: {{hand.attack}}</p>
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
    activeHand(hand){
      this.$store.dispatch('changePlayerHand', hand)
    }
  }
 
};
</script>