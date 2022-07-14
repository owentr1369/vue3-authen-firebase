<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Welcome back, {{ name }}</h2>
    <router-link :to="{ name: 'about' }">About</router-link>
    <div>
      <button class="logout" @click="Logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/app";
export default {
  name: "HomeView",
  setup() {
    const name = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed Out"))
        .catch((err) => console.log(err));
    };
    return {
      name,
      Logout,
    };
  },
};
</script>
