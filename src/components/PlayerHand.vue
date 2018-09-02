<template>
  <div class="player-hand row" >
      <div v-for="hand in playerHand.hand" :key="hand.id" class="col-3">
        <div class="card">
          <img :src="hand.img" class="card-img-top" alt=""/>
          <div class="card-body">
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
    }
  }
};
</script>