
<template>
  <v-layout justify-center>
    <v-flex xs12 lg6 pt-5 mt-5>
      <v-text-field
        v-model="lastname"
        disabled></v-text-field>
      <v-text-field
        v-model="firstname"
        disabled></v-text-field>
      <v-text-field
        v-model="phone"
        mask="### - #### - ####"
        disabled></v-text-field>
      <v-text-field
        v-model="email"
        disabled></v-text-field>
      <v-text-field
        v-model="major"
        disabled></v-text-field>
      <v-layout justify-space-between row>
        <v-btn @click="go_back()">戻る</v-btn>
        <v-btn @click="registration()">修正</v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import firebase from "firebase";
  export default {
    name: "Confirm",
    props: ["p_lastname", "p_firstname", "p_phone", "p_email", "p_major", "p_password"],
    data(){
      return {
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        major: "",
        password: ""
      }
    },
 /*   created: {      
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          lastname = user.displayName;
          lastname = user.displayName;
          email = user.email;
          emailVerified = user.emailVerified;
          phone = user.phone;
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
    }*/
  }
</script>
