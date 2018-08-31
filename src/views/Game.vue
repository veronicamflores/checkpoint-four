<template>
    <div class="game container-fluid">
        <div class="game-config row">
            <div class="col">
                <form class="form-inline" @submit.prevent="startGame">
                    <div class="form-group mb-1 mt-1">
                        <input class="form-control" type="text" v-model="playerName" placeholder="Give Yourself A Name"/>
                        <button class="btn mb-1 mt-1" type="sumbit">Make A New Game!</button> 
                    </div>  
                </form>
                <div v-if="playerName">
                    <button class="btn" @click="getGame">Start Game</button>
                </div>
            </div>
        </div>
        <div>
            <PlayerHand></PlayerHand>
            <TargetHand></TargetHand>
        </div>
        <div></div>
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
        return{
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
            opponents : 1,
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
