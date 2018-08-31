<template>
    <div class="game">
        <div class="game-config">
            <form >
                <input type="text" v-model="playerName" placeholder="Give Yourself A Name"/>
                <button @click="startGame">Start Game</button>
            </form>
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
    data(){
        return{
            playerName:""
        }
    },
    methods:{
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
