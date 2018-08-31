<template>
  <div class="player-hand">
      <div> Test: {{playerHand}}</div> 
      <!-- <div v-for="hand in playerHand" :key="hand.id">
      <img :src="Hand.img" alt=""/>
      <h3>Health: {{Hand.health}}</h3>
      <h3>Attack: {{Hand.attack}}</h3>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'PlayerHand',
  mounted(){
    return this.$store.state.playerHand
  },
  computed: {
    playerHand(){
      return this.$store.state.playerHand
    }
  },
  methods: {
   getPlayerHand(){
     let gameId = this.$store.state.game.gameId
     this.$store.dispatch('getPlayerHand', gameId)
   }
  }
};
</script>