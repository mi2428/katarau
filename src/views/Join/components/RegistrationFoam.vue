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
            <v-text-field v-model="mail"
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
            <v-text-field v-model="passward"
            placeholder="パスワード"
            ></v-text-field>
        </header>
            <v-card-actions>
               <v-btn grey left @click="registration(todo)">登録する</v-btn>
            </v-card-actions>
            <v-icon>person</v-icon>
            <v-card>{{firstname}}</v-card>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  name: "Regist",
  data() {
    return {
      preFirstname: [],
      preLastname: [],
      prePhone: [],
      preMail: [],
      preSpecial: [],
      prePassward: [],
    };
  },
  computed: {
  },

  methods: {
    registration() {
      preFirstname=Firstname
      preLastname=Lastname
      prePhone=phone
      preMail=mail
      preSpecial=special
      prePassward=passward
    }
  }
};
</script>

<style scoped lang="scss">
</style>
