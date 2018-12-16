<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-subheader class="mt-3 grey--text text--darken-1">MENU</v-subheader>
        <v-toolbar flat class = "transparent">
          <v-list-tile-avatar>
            <v-icon rounded large>face</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile v-if ="logged_in" to="/students/prifile" >
              <!-- <v-list-tile-content v-model="this.lastname">さん</v-list-tile-content> -->
              <v-list-tile-content v-model="lastname"></v-list-tile-content>
            </v-list-tile>
            <v-list-tile-content v-else>匿名さん
            </v-list-tile-content>
          </v-list-tile-content>
        </v-toolbar>
        <v-list-tile-content>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            トップ
          </v-list-tile>
          <v-list-tile to="/students">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            学生パートナー
          </v-list-tile>
          <v-list-tile to="/elderly">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            高齢者パートナー
          </v-list-tile>
        </v-list-tile-content>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="#bfbfbf"
      dense
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title mr-5 align-center>
        <v-btn flat class="title" to="/"><h3>かたらう</h3></v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout justify-end row fill-height>
        <v-toolbar-items>
          <v-btn flat to="/students">学生<br>パートナー</v-btn>
          <v-btn flat to="/elderly">高齢者<br>パートナー</v-btn>
          <v-divider vertical></v-divider>
          <v-btn v-if="logged_in" flat @click="signout()">サインアウト</v-btn>
          <v-layout row v-else fill-height>
            <v-text-field
              solo
              v-model="email"
              label="メールアドレス">
            </v-text-field>
            <v-text-field
              solo
              v-model="password"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :type="show ? 'text' : 'password'"
              label="パスワード"
              @click:append="show = !show"
              @keyup.enter="signin()"
            ></v-text-field>
            <v-btn flat to="/students/signin">サインイン</v-btn>
          </v-layout>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
  import firebase from "firebase"

  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  export default {
    name:"HeaderToolbar",
    data () {
      return {
        drawer: false,
        logged_in: false,
        show: false,
        email: "",
        password: "",
        lastname: "",
        firstname: ""
      };
    },
    // created() {
    //   firebase.auth().onAuthStateChanged(user => {
    //     if(user){
    //      var docRef=firebase.firestore().collection("user").doc(user.email);
    //      docRef.get().then(doc => {
    //         var userData = doc.data();
    //         this.lastname = userData.lastname
    //         this.firstname = userData.firstname
    //      })
    //     } else {
    //       // User is signed out.
    //       // ...
    //     }
    //   })
    // },
    methods: {
      signout() {
        firebase.auth().signOut().then(() => {
          this.$router.push('/students')
        });
      },
      signin() {
        if (!pattern.test(this.email)) {
          alert("メールアドレスは正しくありません。");
          return;
        }
        if (this.password.length < 8) {
          console.log("test");
          alert("パスワードは正しくありません。");
          return;
        }
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push('/students');
            this.email = "";
            this.password = "";
          },
          err => {
            alert(err.message)
          }
        )
      }
    },
    created() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.logged_in = true;
          console.log(user);
          console.log(this.logged_in);
        } else {
          this.logged_in = false;
        }
        if(user){
         var docRef=firebase.firestore().collection("user").doc(user.email);
         docRef.get().then(doc => {
            var userData = doc.data();
            this.lastname = userData.lastname
            this.firstname = userData.firstname
            this.email = user.email
            console.log(this.lastname);
         })
        } else {
          // User is signed out.
          // ...
        }
      });
    }
  }
</script>

<style scoped lang="scss">
</style>
