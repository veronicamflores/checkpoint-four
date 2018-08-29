<template>
  <div class="targets">
      <div class="loading" v-if="targets.length == 0">loading targets please wait</div>
      <div class="target" v-else v-for="target in targets" :key="target.id" @click="setTarget(target)">
        {{target.name}}
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getTargets");
  },
  computed: {
    targets() {
      return this.$store.state.targets;
    }
  },
  methods: {
    setTarget(target) {
      this.$store.dispatch("setTarget", target);
    }
  }
};
</script>