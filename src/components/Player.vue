<template>
  <div class="players">
      <div class="loading" v-if="players.length == 0">loading players please wait</div>
      <div class="target" v-else v-for="player in players" :key="player.id" @click="setPlayer(player)">
        {{player.name}}
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getPlayers");
  },
  computed: {
    Players() {
      return this.$store.state.players;
    }
  },
  methods: {
    setPlayer(player) {
      this.$store.dispatch("setPlayer",player);
    }
  }
};
</script>