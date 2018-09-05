<template>
  <div class="target-hand row"> 
    <div class="col-12"><h1>{{target.name}}</h1></div>

    <div v-for="card in target.hand" :key="card.id" class="col-4">

      <div class="card active" @click="activeHand(card)" v-if="card.visible">
        <img :src="card.img" alt="" class="card-img-top"/>
        <div class="card-body">
          <h2>Card Name: {{card.name}}</h2>
          <h3>Health: {{card.health}}</h3>
          <h3>Attack: {{card.attack}}</h3>
        </div>
      </div>

      <div class="card" v-else @click="activeHand(card)">
          <img src="..//assets/AAAADEnelREAAAAAAM6-JASMALL.preview.jpg" alt="card backs">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:'TargetHand',
  computed:{
     target(){
        if(this.$store.state.game.id){
        return this.$store.state.game.players[1]
        }
        return {}
     },
     targetActiveCard(){
       return this.$store.state.targetHand
     }
  },
   methods:{
     activeHand(card){
       debugger
       this.$store.dispatch('changeTargetHand', card)
     }
   }
};
</script>