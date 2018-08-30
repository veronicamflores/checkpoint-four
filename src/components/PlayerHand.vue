<template>
  <div class="players">
     <div class="loading"></div>
      <div class="playerHand" >
        {{players.name}}
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
    setPlayerHand(hand){
      this.$store.dispatch("setPlayerHand", hand)
    }
  }
};
</script>