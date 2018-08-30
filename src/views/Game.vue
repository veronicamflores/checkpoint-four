<template>
    <div class="game">
        <div class="game-config">
            <form @sumbit.prevent="startGame">
                <input type="text" v-model="playerName" placeholder="Give Yourself A Name"/>
                <button type="submit">Sumbit</button>
            </form>
        </div>
        <div></div>
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
    computed:{
        playerHand(){
            return this.$store.state.PlayerHand
        },
        targetHand(){
            return this.$store.state.TargetHand
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
