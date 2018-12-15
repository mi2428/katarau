<template>
  <v-content>
    <div
      id="e3"
      style="max-width: 1800px; margin: auto;"
      class="grey lighten-3"
    >
      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="orange" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">かたらう学生パートナー</div>
                    <span>ああああああああああああああああああああああああああああ
                      あああああああああああああああああああああああああああああ</span>
                  </div>
                </v-card-title>
                <v-layout justify-center>
                  <v-card-actions>
                    <v-btn grey left  @click="to_students_join()" >今すぐ登録する</v-btn>
                    <v-btn grey left  @click="to_students_signin()" >サインイン</v-btn>
                  </v-card-actions>
                </v-layout>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="lime" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">かたらう学生パートナーのメリット</div>
                    <span>ああああああああああああああああああああああああああああ
                      あああああああああああああああああああああああああああああ</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card color="lime" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">仕組み</div>
                    <span>ああああああああああああああああああああああああああああ
                      あああああああああああああああああああああああああああああ</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>


          </v-layout>
        </v-container>
      </v-card>
    </div>
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

</style>
