<template>
  <v-content id="landing">
    <v-container fluid>
      <v-layout justify-center>
        <v-flex xs12, pa-3 ma-3 id="landing_title">
          かたらう
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout justify-space-between align-center row>
        <v-flex xs4 lg3>
          <v-card
            ripple
            color="blue-grey darken-2"
            dark
            class="selection"
            to="students"
          >
            <v-img v-bind:src="require('@/assets/landing_students.jpg')"/>
            <v-card-title primary-title>
              <v-layout justify-center>学生</v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs4 lg3>
          <v-card flat id="landing_vision">
            <div>独居の高齢者に充実した生活を提供する。</div>
            <div>頑張ろう、日本！</div>
          </v-card>
        </v-flex>
        <v-flex xs4 lg3>
          <v-card
            ripple
            color="blue-grey darken-2"
            dark
            to="elderly"
            class="selection"
          >
            <v-img v-bind:src="require('@/assets/landing_elderly.jpg')"/>
            <v-card-title primary-title>
              <v-layout justify-center>高齢者</v-layout>
            </v-card-title>
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
  .selection {
    cursor: pointer;
    font-weight: bold;
    font-size: 40pt;
    border-radius: 50px;
  }
</style>
