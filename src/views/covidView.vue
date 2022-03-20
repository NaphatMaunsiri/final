<template>
  <div>
    <form action="">
      <div>
        <label for="">Date :</label>
        <input v-model="toDate" type="Date" />
      </div>
      <div>
        <label for="">Name-surename</label>
        <input v-model="name" type="text" />
      </div>
      <div>
        <label for="">ATK:(Positive / Negative)</label>
        <input v-model="atk" type="text" />
      </div>
      <div>
        <label for="">Phone number : </label>
        <input v-model="phone" type="Number" />
      </div>
      <div>
        <label for="">Email : </label>
        <input v-model="email" type="Email" />
      </div>
    </form>
    <button @click="addData()">Add Data</button>
    <button @click="readData()">Read Data</button>
    <br />
    <table>
      <tr>
        <th>Date</th>
        <th>Name</th>
        <th>ATK</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      <tr v-for="(data, index) in allData" :key="index">
        <td>{{ data.toDate }}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.atk }}</td>
        <td>{{ data.phone }}</td>
        <td>{{ data.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../plugins/config-db";

export default {
  data: () => ({
    toDate: "",
    name: "",
    atk: "",
    phone: "",
    email: "",
    allData: [],
  }),
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          toDate: this.toDate,
          name: this.name,
          atk: this.atk,
          phone: this.phone,
          email: this.email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.allData.push(doc.data());
      });
    },
  },
};
</script>

<style>
table,
tr,
td,
th {
  border: 1px solid black;
  border-collapse: collapse;
}
th {
  background-color: yellow;
  color: black;
}
</style>