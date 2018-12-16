<template>
  <v-content id="landing">
    <v-container fluid grid-list-sm>
      <v-layout row wrap justify-space-between>
        <v-flex xs12 id="landing_title">
          かたらう
        </v-flex>
        <v-flex xs12>
          <v-card id="landing_vision" flat>
            <div>独居の高齢者に充実した生活を提供する。</div>
            <div>頑張ろう、日本！</div>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card
            ripple
            color="blue-grey darken-2"
            dark
            class="selection"
            to="students"
          >
            <v-container
              fluid
              grid-list-lg
            >
              <v-layout>
                <v-flex xs4>
                  <v-img
                    class="landing_img"
                    v-bind:src="require('@/assets/landing_students.jpg')"/>
                </v-flex>
                <v-flex xs8>
                  <v-card-title primary-title>
                    <v-layout justify-center>学生様へ</v-layout>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card
            ripple
            color="blue-grey darken-2"
            dark
            to="elderly"
            class="selection"
          >
            <v-container
              fluid
              grid-list-lg
            >
              <v-layout>
                <v-flex xs4>
                  <v-img
                    class="landing_img"
                    v-bind:src="require('@/assets/landing_elderly.jpg')"/>
                </v-flex>
                <v-flex xs8>
                  <v-card-title primary-title>
                    <v-layout justify-center>高齢者様へ</v-layout>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style scoped lang="scss">
  #landing {
    min-height: 100vh;
    background: #F8ECE0;
  }
  #landing_title {
    color: orange;
    font-size: 50pt;
    font-weight:bold
  }
  #landing_vision {
    color: orange;
    background: #F8ECE0;
    font-size: 20pt;
    font-weight:bold
  }
  .landing_img {
    height: 30vh;
    border-radius: 50px;
  }
  .selection {
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    font-size: 40pt;
    background-color: black;
  }
</style>
