<template>
    <div class="game container-fluid">
        <div class="game-config row">
            <div class="col">
                <form class="form-inline" @submit.prevent="startGame">
                    <div class="form-group mb-1 mt-1">
                        <input type="text" v-model="playerName" placeholder="Give Yourself A Name" class="form-control"/>
                        <button type="sumbit" class="btn mb-1 mt-1" >Make A New Game!</button> 
                    </div>  
                </form>
                <div v-if="playerName">
                    <button @click="getGame"  class="btn">Start Game</button>
                </div>
            </div>
        </div>
        <div>
            <PlayerHand></PlayerHand>
            <TargetHand></TargetHand>
        </div>
           
           
    </div>
</template>

<script>
import PlayerHand from "@/components/PlayerHand";
import TargetHand from "@/components/TargetHand";

export default {
    name: 'game',
    game(){
        return
    },
    data(){
        return {
            playerName:""
        }
    },
    methods:{
        getGame(){
            let gameId = this.$store.state.game.id
            this.$store.dispatch("getGame", gameId)
        },
        startGame(){
        let gameConfig = {
            playerName: this.playerName,
            opponents: 1,
            set: 2
        }
        this.$store.dispatch('startGame', gameConfig)
        }
    },
    components:{
        PlayerHand,
        TargetHand
    }
};
</script>
