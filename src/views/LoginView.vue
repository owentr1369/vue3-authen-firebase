<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <input type="text" name="" id="" placeholder="Your email" />
      <input type="password" name="" id="" placeholder="Password" />
      <input type="submit" value="Login" />
      <p>
        Need an account?
        <router-link :to="{ name: 'register' }">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>