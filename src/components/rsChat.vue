<template>
  <div class="rsChat">
    <rsUserChat />

    <div class="rsChat__divider"></div>

    <rsAdminChat />
  </div>
</template>

<script>
import rsUserChat from "../components/rsUserChat.vue";
import rsAdminChat from "../components/rsAdminChat.vue";

export default {
  name: "rsChat",
  components: {
    rsUserChat,
    rsAdminChat,
  },
};
</script>

<style lang="less">
@import "../assets/globalStyles/styles.less";

.rsChat {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  box-sizing: border-box;
  width: 100%;
  padding: 30px 0;
}

.rsChat__divider {
  width: 2px;
  height: 100%;
  background-color: @decorative-gray;
}
</style>
