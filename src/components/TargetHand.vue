<template>
  <div class="target-hand"> 
    <div v-for="hand in targetHand" :key="hand.id">
      <img :src="hand.img" alt=""/>
      <h3>Health: {{hand.health}}</h3>
      <h3>Attack: {{hand.attack}}</h3>
    </div>
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
        if(this.$store.state.game.id){
        return this.$store.state.game.players[1]
        }
        return {}
     }
  }
};
</script>