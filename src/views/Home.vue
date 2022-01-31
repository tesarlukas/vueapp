<template>
  <div class="home">
    <Introduction
      class="introduction"
      msg="Hello there! This project serves as a simple demonstration of what is Vue
      3 capable of. For more information click here."
    />
  </div>
</template>

<script>
import Introduction from '../components/Introduction.vue';

export default {
  name: 'Home',
  components: {
    Introduction,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  height: calc(100vh - 62.5px);
}

.introduction {
  width: 60%;
  margin: auto;
}
</style>
