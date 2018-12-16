<template>
  <v-layout justify-center>
    <v-flex xs12 lg6 pt-5 mt-5>
      <p><font color="#0000ff" size="4">登録内容</font></p>
      <v-text-field
        v-model="lastname"
        label="姓"
        disabled></v-text-field>
      <v-text-field
        v-model="firstname"
        label="名"
        disabled></v-text-field>
      <v-text-field
        v-model="phone"
        mask="### - #### - ####"
        label="電話番号"
        disabled></v-text-field>
      <v-text-field
        v-model="email"
        label="メールアドレス"
        disabled></v-text-field>
      <v-text-field
        v-model="major"
        label="学科名"
        disabled></v-text-field>
      <v-layout justify-space-between row>
        <v-btn @click="go_back()">戻る</v-btn>
        <v-btn @click="modification()">修正</v-btn>
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
    beforeMount() {
      this.lastname = this.p_lastname;
      this.firstname = this.p_firstname;
      this.phone = this.p_phone;
      this.email = this.p_email;
      this.major = this.p_major;
      this.password = this.p_password
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
            this.password= user.password
         })      
        } else {
          // User is signed out.
          // ...
        }
      })

    },
    methods: {
      modification(){
        this.$router.push({
          name: 'form',
            params:{
            p_lastname: this.lastname,
            p_firstname: this.firstname,
            p_phone: this.phone,
            p_email: this.email,
            p_major: this.major,
            p_password: this.password
          }
        });
        
      }
    }
  }
</script>
