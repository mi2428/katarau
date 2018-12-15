<template>
  <v-layout justify-center>
    <v-flex xs12 lg6 pt-5 mt-5>
      <v-text-field v-model="lastname" disabled></v-text-field>
      <v-text-field v-model="firstname" disabled></v-text-field>
      <v-text-field v-model="phone" disabled></v-text-field>
      <v-text-field v-model="email" disabled></v-text-field>
      <v-text-field v-model="major" disabled></v-text-field>
      <v-btn @click="registration()">登録完了</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import firebase from "firebase";
  export default {
    name: "Confirm",
    props: ["lastname", "firstname", "phone", "email", "major", "password"],
    data(){
      return {
      }
    },
    methods: {
      registration() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            firebase.firestore().collection("user").add({
              lastname: this.lastname,
              firstname: this.firstname,
              phone: this.phone,
              major: this.major
            });
            alert("Account created succesfully!");
            this.$router.push('/students');
          })
          .catch(error => {
            alert(error.message);
        });
      }
    }
  }
</script>
