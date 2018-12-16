
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
    name: "UserProfile",
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
    beforeCreate() {
      firebase.auth().onAuthStateChanged(user => {
        if(user){
         var docRef=firebase.firestore().collection("user").doc(user.email);
         docRef.get().then(doc => {
            var userData = doc.data();
            this.lastname = userData.lastname
            this.firstname = userData.firstname
            this.phone = userData.phone
            this.email = user.email
            this.major = userData.major
         })      
        } else {
          // User is signed out.
          // ...
        }
      })

    }
  }
</script>
