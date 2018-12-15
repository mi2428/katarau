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
            <v-list-tile-title> Your Name</v-list-tile-title>
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
      color="orange"
      dense
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title mr-5 align-center>
        <span class="title">かたらう</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout justify-end row>
        <v-toolbar-items>
          <v-btn flat to="/students">学生パートナー</v-btn>
          <v-btn flat to="/elderly">高齢者パートナー</v-btn>
          <v-divider vertical></v-divider>
          <v-btn v-if="logged_in" flat @click="signout()">サインアウト</v-btn>
          <v-layout row v-else>
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
        password: ""
      };
    },
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
      });
    }
  }
</script>

<style scoped lang="scss">
</style>
