<template>
    <div class="game">
        <form @sumbit="game">
            <label for=""></label>
            <input type="text" v-model="playerName"/>
            <button type="submit">Sumbit</button>
        </form>
        <div class="game-config">
            <div class="selected-player"></div>
            <div>
                <button @click="startGame"></button>
            </div>
            <div class="selected-target"></div>
        </div>
        <div class="select-game-details">
            <targets/>
            <players/>
        </div>
    </div>
</template>
<script>
import PlayerHand from '@/components/PlayerHand'
import TargetHand from '@/components/TargetHand'
export default {
    
}
</script>
