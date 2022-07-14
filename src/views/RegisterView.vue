<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
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
      <input type="submit" value="Register" />
      <p>
        Had an account?
        <router-link :to="{ name: 'login' }">Login</router-link>
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
    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log("data", data))
        .catch((err) => console.log(err));
    };
    return {
      Register,
      email,
      password,
    };
  },
};
</script>

<style>
</style>