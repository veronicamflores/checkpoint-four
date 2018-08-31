<template>
  <div class="players">
      <div class="playerHand" v-for="hand in players[0].hand" :key="hand.id" @click="setPlayerHand(playerHand)">
        <img :src="hand.img" alt=""/>
        <h3>Health: {{hand.health}}</h3>
        <h3>Attack: {{hand.attack}}</h3>
      </div>
      <h1>{{strName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'PlayerHand',
  mounted() {
    this.$store.dispatch("getPlayerHand");
  },
  computed: {
    playerHand() {
      return this.$store.state.playerHand
    }
  },
  methods: {
    setPlayerHand(playerHand){
      this.$store.dispatch("setPlayerHand", hand)
    }
  }
};
</script>