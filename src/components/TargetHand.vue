<template>
  <div class="target-hand row"> 
    <div v-for="hand in targetHand" :key="hand.id" class="col-3">
      <div class="card">
        <img :src="hand.img" alt="" class="card-img-top"/>
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
  name:'TargetHand',
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