<template>
  <div class="container">
    <h1>Register page</h1>
    <div>
      <form action="">
        <div>
          <label for="">first name : </label>
          <input v-model="fname" type="text" />
        </div>
        <div>
          <label for="">lasts name : </label>
          <input v-model="lname" type="text" />
        </div>
        <div>
          <label for="">email : </label>
          <input v-model="email" type="email" />
        </div>
        <div>
          <label for="">password : </label>
          <input v-model="password" type="password" />
        </div>
      </form>
    </div>
    <button @click="addData()">Add Data</button>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/config-db";

export default {
  data: () => ({
    fname: "",
    lnme: "",
    email: "",
    password: "",
  }),
  methods: {
    addData() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          alert("sign up complete" + user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          // ..
        });
    },
  },
};
</script>

<style></style>
