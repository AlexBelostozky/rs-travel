<template>
  <rsAbout />
  <rsRewievs />
  <rsChat />
</template>

<script>
import rsAbout from "./components/rsAbout.vue";
import rsRewievs from "./components/rsRewievs.vue";
import rsChat from "./components/rsChat.vue";

export default {
  name: "rsAbout",
  components: {
    rsAbout,
    rsRewievs,
    rsChat,
  },
};
</script>

<style lang="less"></style>
