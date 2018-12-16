<template>
  <v-content>
    <v-container>
      <v-layout justify-center row>
        <v-flex xs12 lg6>
          <h1>サインイン</h1>
          <v-text-field
            v-model="email"
            label="メールアドレス"
            :rules="[rules.required, rules.email]">
          </v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            label="パスワード"
            counter
            @click:append="show = !show"
            @keyup.enter="signin()"
          ></v-text-field>
          <v-btn @click="signin()">サインイン</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "firebase";
const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export default {
  name: "SignIn",
  components: {
  },
  data() {
    return {
      show: false,
      email: "",
      password: "",
      rules: {
        required: value => !!value || '必須項目',
        min: v => v.length >= 8 || '8文字以上',
        email: value => {
          return pattern.test(value) || 'メールアドレスは正しくありません'
        }
      }
    };
  },
  methods: {
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
          this.$router.push({path : 'profile'});
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
</style>
