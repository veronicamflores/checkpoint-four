<template>
    <div class="game">
        <div class="game-config">
            <form @submit.prevent="startGame">
                <input type="text" v-model="playerName" placeholder="Give Yourself A Name"/>
                <button type="sumbit">Make A New Game!</button>   
            </form>
            <div v-if="playerName">
                <button @click="getGame">Start Game</button>
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
