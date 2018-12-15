<template>
  <div>
    <section>
      <v-card>
          <h2>name</h2>
        <header>
            <v-text-field v-model="lastname"
            placeholder="name"
            ></v-text-field>
        </header>
        <h2>電話番号</h2>
        <header>
            <v-text-field v-model="firstname"
            placeholder="電話番号"
            ></v-text-field>
        </header>
        <h2>メールアドレス</h2>
        <header>
            <v-text-field v-model="email"
            placeholder="メールアドレス"
            ></v-text-field>
        </header>
        <h2>専攻</h2>
        <header>
            <v-text-field v-model="special"
            placeholder="選考"
            ></v-text-field>
        </header>
        <h2>パスワード</h2>
        <header>
            <v-text-field v-model="password"
            placeholder="パスワード"
            ></v-text-field>
        </header>
            <v-card-actions>
               <v-btn grey left @click="registration()">登録する</v-btn>
            </v-card-actions>
            <v-icon>person</v-icon>
            <v-card>{{firstname}}</v-card>
      </v-card>
    </section>
  </div>
</template>

<script>
  import firebase from "firebase";
  export default {
    name: "Register",
    data() {
      return {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        special: "",
        password: "",
      };
    },
    computed: {
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
  };
</script>
<style scoped lang="scss">
</style>
