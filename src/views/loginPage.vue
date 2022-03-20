<template>
  <div class="container">
    <h1>Login Page</h1>
    <div>
      <form action="">
        <div>
          <label for="">Email : </label>
          <input v-model="cemail" type="email" />
        </div>
        <div>
          <label for="">password</label>
          <input v-model="cpassword" type="password" />
        </div>
      </form>
      <button @click="login()">Login</button>
      <button @click="logout()">Log out</button>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../plugins/config-db";
export default {
  data: () => ({
    listData: [],
    i: 0,
    cemail: "",
    cpassword: "",
  }),
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.cemail, this.cpassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("login complete");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    },
    logout() {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          alert("log out complete.");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
