<template>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-layout col wrap justify-center>
        <v-flex>
          <v-card color="#ff9933">
            <v-card-text>
              <div>
                <h3 class="text_align_title">かたらう学生パートナー</h3>
                  <span class="text_align_content">
                    ご高齢者の方は歳をとるにつれて体の調子を保つのが難しくなります．<br>
                    缶のふたが開けられない！蛍光灯が変えられない！重い荷物を運べない！<br>
                    近くにヘルプを求める方が沢山います．<br>
                    しかし周囲の人たちが,そのヘルプに気づきにくいのが現状です<br>
                    私たちはヘルプを求める年配の方と,それを助けることができる学生をつなぎます．
                  </span>
              </div>
            </v-card-text>
            <v-layout col wrap justify-center>
              <v-card-actions>
                <v-btn
                  large
                  grey
                  color="#ffffb3"
                  class="card_button"
                  @click="to_students_join()"
                >
                  今すぐ登録する
                </v-btn>
                <v-btn
                  large
                  grey
                  color="#ffffb3"
                  class="card_button"
                  @click="to_students_signin()"
                >
                  サインイン
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
        
        <v-flex>
          <v-card color="lime">
            <v-card-text>
              <div clss="text_align">
                <h3 class="text_align_title">かたらう学生パートナーのメリット</h3>
                  <span class="text_align_content">
                    学生が身内以外の高齢者と交流できる機会は限られています.<br>
                    お手伝いを通じて、人生経験が豊富な年配の方と交流することにより,自身の見識や行動などが広がる可能性を提案します．<br>
                    また、授業の空きコマなどの隙間時間に短時間で可能なバイトとして,大学生という限られた有限な時間を有効活用してもらうことができます．
                  </span>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card color="lime">
            <v-card-text >
              <div>
                <h3 class="text_align_title">仕組み</h3>
                  <span class="text_align_content">
                    会員登録をした学生の皆さんには,高齢者のヘルプに応じて連絡がいきます.<br>
                  </span>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-layout col wrap justify-center>
          <v-card-actions>
            <v-btn block
              large
              dark
              grey
              color="orange"
              class="large_card_button"
              @click="to_students_join()"
            >
              今すぐ登録する
            </v-btn>
          </v-card-actions>
        </v-layout>

        <v-flex xs12 lg8>
          <v-card color="lime">
            <h3 class="card_title">利用者の声</h3>
            <user-voice></user-voice>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import UserVoice from "./components/user_voice.vue";

export default {
  name: "Student",
  methods: {
    to_students_join() {
      this.$router.push({path : 'students/join/form'})
    },
    to_students_signin() {
      this.$router.push({path : 'students/signin'})
    },
  },
  components:{
    UserVoice
  },
  mounted(){
    console.log(this.$vuetify.breakpoint)
  },
   computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '220px'
        case 'sm': return '400px'
        case 'md': return '500px'
        case 'lg': return '600px'
        case 'xl': return '800px'
      }
    }
  }
};
</script>

<style scoped lang="scss">
.text_align{
  width: 100%;
  background:#FFBF00;
}
.text_align_title{
  text-align:center;
  color:#151515;
  font-size: 200%;
}
.text_align_content{
  text-align:center;
  color:#151515;
  font-size: 140%;
}
// .card_title {
//   color:#1C1C1C;
//   font-size: 25pt;
//   text-align: center;
// }
// .card_content {
//   color: #1C1C1C;
//   font-size: 15pt;
//   text-align: center;
// }
.card_button {
  font-size: 2vw;
  font-weight: bold;
}
.large_card_button {
  font-size: 25pt;
  height: 100pt;
  width: 90vw;
  font-weight: bold;
}
</style>
