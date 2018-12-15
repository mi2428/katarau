<template>
  <v-layout>
    <v-flex lg6 pt-5 mt-5>
      <v-text-field v-model="firstname"></v-text-field>
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
              firstname: this.firstname,
              lastname: this.lastname,
            });

          })
          .catch(error => {
            alert(error.message);
        });
      }
    }
  }
</script>
