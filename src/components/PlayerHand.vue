<template>
  <div class="player-hand">
      <div> Test: {{playerHand}}</div> 
      <div v-for="hand in playerHand.hand" :key="hand.id">
      <img :src="Hand.img" alt=""/>
      <h3>Health: {{Hand.health}}</h3>
      <h3>Attack: {{Hand.attack}}</h3>
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
    }
  }
};
</script>