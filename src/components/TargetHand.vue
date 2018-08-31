<template>
  <div class="target-hand">
     <div v-for="hand in targetHand.hand" :key="hand.id" @click="setTargetHand(hand)">
        <img :src="hand.img" alt=""/>
        <h3>Health: {{hand.health}}</h3>
        <h3>Attack: {{hand.attack}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  name:'targetHand',
  mounted() {
      this.$store.dispatch("getHand");
  },
  computed: {
     targetHand(){
            return this.$store.state.targetHand
        }
  },
  methods: {
     setTargetHand(hand){
      this.$store.dispatch("setHand", hand)
    }
  }
};
</script>