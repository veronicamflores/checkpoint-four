<template>
  <div class="target-hand row"> 
    <div class="col-12"><h1>{{targetHand.name}}</h1></div>
    <div v-for="hand in targetHand" :key="hand.id" class="col-3">
      <div class="card" v-if="targetActiveHand.id == targetHand.id">
        <img :src="hand.img" alt="" class="card-img-top"/>
        <div class="card-body">
          <h2>Card Name: {{hand.name}}</h2>
          <h3>Health: {{hand.health}}</h3>
          <h3>Attack: {{hand.attack}}</h3>
        </div>
      </div>
      <div class="card" v-else @click="activeHand(targetHand)">
          <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TargetHand',
  computed:{
     targetHand(){
        if(this.$store.state.game.id){
        return this.$store.state.game.players[1]
        }
        return {}
     },
     targetActiveHand(){
       return this.$store.state.targetHand
     }
  },
   methods:{
     activeHand(targetHand){
       this.$store.dispatch('setTargetHand', targetHand)
     }
   }
};
</script>