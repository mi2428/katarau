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
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="At least 6 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs3>
            <v-subheader>パスワード再入力</v-subheader>
          </v-flex>
        　<v-flex xs12 sm6>
            <v-text-field
            v-model="passwordConfirm"
            :append-icon="show2 ? 'visibility_off' : 'visibility'"
            :rules="[rules.confirmRequired, rules.confirmRules]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            counter
            @click:append="show2 = !show2"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-card-actions left>
            <v-btn @click="registration()">確認画面へ</v-btn>
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
        passwordConfirm: "",
        show1: false,
        show2: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          confirmRequired: v => !!v || 'Password Confirm is required',
          confirmRules: v => v === this.password && 'equal to password',
        }
      };
    },
    computed: {
    },

    methods: {
      registration() {
        if(this.password===this.passwordConfirm){
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
    }
  };
</script>
<style scoped lang="scss">
</style>
