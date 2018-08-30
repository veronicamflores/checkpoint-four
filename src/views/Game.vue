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
    methods:{
        startGame(){
        this.$store.dispatch(this.PlayerHand);
        }
    },
    components:{

    }
};
</script>
