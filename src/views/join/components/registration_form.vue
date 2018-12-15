<template>
  <div>
    <section>
      <v-card>
        <v-layout row>
          <v-flex xs3>
            <v-subheader>名前</v-subheader>
          </v-flex>
        　<v-flex xs12 sm3>
            <v-text-field
              v-model="lastname"
              placeholder="性"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm3>
            <v-text-field
              v-model="firstname"
              placeholder="名"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs3>
            <v-subheader>電話番号</v-subheader>
          </v-flex>
        　<v-flex xs12 sm6>
            <v-text-field
              v-model="phone"
              placeholder="電話番号"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs3>
            <v-subheader>メールアドレス</v-subheader>
          </v-flex>
        　<v-flex xs12 sm6>
            <v-text-field
              v-model="email"
              placeholder="e-mailアドレス"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs3>
            <v-subheader>専攻</v-subheader>
          </v-flex>
        　<v-flex xs12 sm6>
            <v-text-field
              v-model="major"
              placeholder="専攻"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs3>
            <v-subheader>パスワード</v-subheader>
          </v-flex>
        　<v-flex xs12 sm6>
            <v-text-field
              v-model="password"
              placeholder="パスワード"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-card-actions left>
            <v-btn red @click="registration()">登録する</v-btn>
          </v-card-actions>
        </v-layout>
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
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        major: "",
        password: "",
      };
    },
    computed: {
    },

    methods: {
      registration() {
        this.$router.push({
          name: 'confirm',
          params:{
            lastname: this.lastname,
            firstname: this.firstname,
            phone: this.phone,
            email: this.email,
            major: this.major,
            password: this.password
          }
        });
      }
    }
  };
</script>
<style scoped lang="scss">
</style>
