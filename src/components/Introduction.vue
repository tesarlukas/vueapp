<template>
  <div class="introduction">
    <img class="logo" alt="Vue logo" src="../assets/logo.png" />
    <div class="text">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  display: flex;

  .logo {
    width: 500px;
  }

  .text {
    font-size: 40px;
  }
}
</style>
