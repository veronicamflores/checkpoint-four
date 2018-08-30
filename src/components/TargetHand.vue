<template>
  <div class="target">
     <div class="targetHand" v-for="hand in players[1].hand" :key="hand.id">
        <img :src="hand.img" alt=""/>
        <h3>Health: {{hand.health}}</h3>
        <h3>Attack: {{hand.attack}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
      this.$store.dispatch("getTargetHand");
  },
  computed: {
  },
  methods: {
     setTargetHand(targetHand){
      this.$store.dispatch("setTargetHand", hand)
    }
  }
};
</script>