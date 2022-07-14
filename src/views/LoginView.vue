<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <input
        type="text"
        name=""
        id=""
        placeholder="Your email"
        v-model="email"
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Password"
        v-model="password"
      />
      <input type="submit" value="Login" />
      <p>
        Need an account?
        <router-link :to="{ name: 'register' }">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/app";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log("data", data))
        .catch((err) => console.log(err));
    };
    return {
      Login,
      email,
      password,
    };
  },
};
</script>

<style>
</style>