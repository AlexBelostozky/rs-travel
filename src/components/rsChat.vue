<template>
  <div class="rsChat">
    <rsUserChat
      :addresser="$store.state.users[1]"
      :addressee="$store.state.users[0]"
    />

    <div class="rsChat__divider"></div>

    <rsUserChat
      :addresser="$store.state.users[0]"
      :addressee="$store.state.users[1]"
    />
  </div>
</template>

<script>
import rsUserChat from "../components/rsUserChat.vue";
// import rsAdminChat from "../components/rsAdminChat.vue";

export default {
  name: "rsChat",
  components: {
    rsUserChat,
    // rsAdminChat,
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
  padding: 30px 0 0 0;
}

.rsChat__divider {
  width: 2px;
  min-height: 100%;
  background-color: @decorative-gray;
}
</style>
