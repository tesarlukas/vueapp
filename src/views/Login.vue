<template>
  <form class="form" action="">
    <label for="">Username</label>
    <input v-model="username" type="text" name="name" id="" />
    <label for="password">Password</label>
    <input v-model="password" type="password" name="password" id="" />
    <button @click="onSubmit()" type="submit">Login</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['setUser']),
    onSubmit() {
      if (this.username === 'admin' && this.password === '1234') {
        this.setUser({ username: this.username, password: this.password });
        this.$router.push('/movies');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 300px;
}
</style>
