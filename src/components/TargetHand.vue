<template>
  <div class="target-hand">
    <div>Test: {{targetHand}}</div>  
    <!-- <div v-for="hand in targetHand" :key="hand.id">
      <img :src="hand.img" alt=""/>
      <h3>Health: {{hand.health}}</h3>
      <h3>Attack: {{hand.attack}}</h3>
    </div> -->
  </div>
</template>

<script>
export default {
  name:'TargetHand',
  mounted(){
    return this.$store.state.targetHand
  },
  computed:{
     targetHand(){
        return this.$store.state.targetHand
     }
  },
  methods:{
    getTargetHand(){
      let gameId = this.$store.state.game.gameId
     this.$store.dispatch('getTargetHand', gameId)
    }
  }
};
</script>