<template>
  <div class="player-hand">
      <div v-for="hand in playerHand.hand" :key="hand.id">
        <img :src="hand.img" alt=""/>
        <h3>Health: {{hand.health}}</h3>
        <h3>Attack: {{hand.attack}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: 'playerHand',
  mounted() {
    this.$store.dispatch("getHand");
  },
  computed: {
    playerHand() {
      return this.$store.state.playerHand
    }
  },
  methods: {
    setPlayerHand(){
       let gameId = this.$store.state.game.id
      this.$store.dispatch("setHand", gameId)
    }
  }
};
</script>