<template>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-layout col wrap justify-center>
        <v-flex xs12 lg8>
          <v-card color="orange">
            <v-card-title primary-title>
              <div>
                <h3 class="card_title">かたらう学生パートナー</h3>
                <span class="card_content">
                  ご高齢者の方は歳をとるにつれて体の調子を保つのが難しくなります．
                  缶のふたが開けられない！蛍光灯が変えられない！重い荷物を運べない！
                  近くにヘルプを求める高齢者はたくさんいます．しかし助けれる人たちが
                  そのヘルプに気づきにくいのが現状です私たちはヘルプを求める老人とそれ
                  を助けることができる暇な学生をつなぎます．
                </span>
              </div>
            </v-card-title>
            <v-layout justify-center>
              <v-card-actions>
                <v-btn
                  large
                  grey
                  flat
                  color="blue"
                  class="card_button"
                  @click="to_students_join()"
                >
                  今すぐ登録する
                </v-btn>
                <v-btn
                  large
                  grey
                  flat
                  color="blue"
                  class="card_button"
                  @click="to_students_signin()"
                >
                  サインイン
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12 lg8>
          <v-card color="lime">
            <v-card-title primary-title>
              <div>
                <h3 class="card_title">かたらう学生パートナーのメリット</h3>
                <span class="card_content">
                  学生は身内以外の高齢者との交流はほとんどありません．
              　　経験豊富な高齢者とお手伝いを通じて交流することにより
              　　自身の見識や行動などが広がる可能性を提案します．
              　　また授業の空きコマなどの暇な時間に短時間でできるバイトとして
                  大学生という限られた有限な時間を有効活用してもらうことができます．
                </span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 lg8>
          <v-card color="lime">
            <v-card-title primary-title>
              <div>
                <h3 class="card_title">仕組み</h3>
                <span class="card_content">
                  学生の皆さんは会員登録してもらうと老人のヘルプに応じて学生へ連絡がいきます
                </span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Student",
  methods: {
    to_students_join() {
      this.$router.push({path : 'students/join'})
    },
    to_students_signin() {
      this.$router.push({path : 'students/signin'})
    },
  }
};
</script>

<style scoped lang="scss">
.card_title {
  color: black;
  font-size: 25pt;
}
.card_content {
  color: black;
  font-size: 15pt;
}
.card_button {
  font-size: 18pt;
}
</style>
