<template>
  <div class="players">
      <div class="playerHand" v-for="hand in players[0].hand" :key="hand.id" @click="setPlayerHand(playerHand)">
        <img :src="hand.img" alt=""/>
        <h3>Health: {{hand.health}}</h3>
        <h3>Attack: {{hand.attack}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
  },
  computed: {
  },
  methods: {
    setPlayerHand(playerHand){
      this.$store.dispatch("setPlayerHand", hand)
    }
  }
};
</script>