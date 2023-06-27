<template>
  <main class="rsTravel">
    <h1 class="visually-hidden">Приглашаем посетить Барселону!</h1>
    <rsAbout />
    <rsRewievs />
    <rsChat />
  </main>
</template>

<script>
import rsAbout from "./components/rsAbout.vue";
import rsRewievs from "./components/rsRewievs.vue";
import rsChat from "./components/rsChat.vue";

export default {
  name: "rsTravel",
  components: {
    rsAbout,
    rsRewievs,
    rsChat,
  },
};
</script>

<style lang="less">
@import "./assets/globalStyles/styles.less";

.rsTravel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 879px;
  padding: 110px 0 134px;
  margin: 0 auto;
}
</style>
