import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCJaxGqw1OrlbEIfkY7hEFxLvPN4xPQO8",
  authDomain: "vue3-authen-firebase.firebaseapp.com",
  projectId: "vue3-authen-firebase",
  storageBucket: "vue3-authen-firebase.appspot.com",
  messagingSenderId: "942237333566",
  appId: "1:942237333566:web:f2b02a3a1f45b20217396f",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
