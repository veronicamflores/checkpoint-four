<template>
    <div class="game container-fluid">
        <div class="game-config row">
            <div class="col-12 d-flex justify-content-center">
                <h1>LET'S PLAY A GAME</h1>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <form class="form-inline" @submit.prevent="startGame">
                    <div class="form-group mb-1 mt-1">
                        <input type="text" v-model="playerName" placeholder="Give Yourself A Name" class="form-control"/>
                        <button type="sumbit" class="btn mb-1 mt-1" >Make A New Game!</button> 
                    </div>  
                </form>
            </div>
            <div class="col-12" v-if="game.winner">
                <h1>THE WINNER IS ...</h1>
                {{game.winner.name}}
            </div>
        </div>
            <PlayerHand v-if="!game.winner"></PlayerHand>
            <div class="col-12" v-if="!game.winner">
                <button class="btn" v-if="player.id && target.id" @click="attack">ATTACK</button>
            </div>
            <TargetHand v-if="!game.winner"></TargetHand>
    </div>
</template>

<script>
import PlayerHand from "@/components/PlayerHand";
import TargetHand from "@/components/TargetHand";

export default {
    name: 'game',
    data(){
        return {
            playerHand:{},
            targetHand:{},
            playerName:""
        }
    },
    computed:{
        game(){
            return this.$store.state.game
        },
        target(){
            return this.$store.state.targetHand
        },
        player(){
            return this.$store.state.playerHand
        },
        playerInformation(){
            if(this.$store.state.game.id){
                return this.$store.state.game.players[0]
        }
        },
        targetInformation(){
          if(this.$store.state.game.id){
                return this.$store.state.game.players[1]
        }
        }
    },
    methods:{
        startGame(){
        let gameConfig = {
            playerName: this.playerName,
            opponents: 1,
            set: 2
        }
        this.$store.dispatch('startGame', gameConfig)
        },
        attack(){
            let attack = {
                playerId: this.playerInformation.id,
                playerHandId: this.player.id,
                targetId: this.targetInformation.id,
                targetHandId: this.target.id
            }
            this.$store.dispatch('attack', attack)
        }
    },
    components:{
        PlayerHand,
        TargetHand
    }
}
</script>
<style>
</style>
