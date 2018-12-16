<template>
  <v-layout row justify-center>
    <v-flex xs12 lg6>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="lastname"
          label="姓"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          v-model="firstname"
          label="名"
          :rules="[rules.required]"
        ></v-text-field>

        <v-text-field
          v-model="phone"
          label="電話番号"
          :rules="[rules.required]"
          mask="### - #### - ####"
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="メールアドレス"
          :rules="[rules.required, rules.email]"
        ></v-text-field>

        <v-text-field
          v-model="major"
          label="大学での学科名"
          :rules="[rules.required]"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="パスワード"
          :append-icon="show1 ? 'visibility_off' : 'visibility'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          hint="" 
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          :append-icon="show2 ? 'visibility_off' : 'visibility'"
          :rules="[rules.required, rules.confirm]"
          :type="show2 ? 'text' : 'password'"
          label="パスワード(再入力)"
          counter
          @click:append="show2 = !show2"
        ></v-text-field>

        <v-layout justify-space-between>
          <v-btn @click="clear()">クリア</v-btn>
          <v-btn :disabled="!valid" @click="registration()">確認画面へ</v-btn>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
  import firebase from "firebase";
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  export default {
    name: "Register",
    props: ["p_lastname", "p_firstname", "p_phone", "p_email", "p_major"],
    data() {
      return {
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        major: "",
        password: "",
        passwordConfirm: "",
        valid: false,
        show1: false,
        show2: false,
        rules: {
          required: v => !!v || '入力してください',
          min: v => v.length >= 8 || '8文字以上にしてください',
          email: value => {
            return pattern.test(value) || 'メールアドレスは正しくありません'
          },
          confirm: v => v.localeCompare(this.password) && 'パスワードが一緒ではありません',
        }
      };
    },
    beforeMount() {
      this.lastname = this.p_lastname;
      this.firstname = this.p_firstname;
      this.phone = this.p_phone;
      this.email = this.p_email;
      this.major = this.p_major;
    },
    methods: {
      registration() {
        if(this.$refs.form.validate()){
          this.$router.push({
            name: 'confirm',
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
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  };
</script>
<style scoped lang="scss">
</style>
