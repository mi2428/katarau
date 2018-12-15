<template>
  <v-content id="landing">
    <v-container>
      <v-layout justify-center>
        <v-flex xs12, pa-3 ma-3 id="landing_title">
          かたらう
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 lg6 id="landing_vision">
          <div>独居の高齢者に充実した生活を提供する。</div>
          <div>頑張ろう、日本！</div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout justify-center row>
        <v-flex xs6 lg4>
          <v-card
            class="selection"
            @click="to_students()"
          >
            <v-img
              v-bind:src="require('@/assets/landing_students.jpg')"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span>学生</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>
        <v-flex xs0 lg2/>
        <v-flex xs6 lg4>
          <v-card
            class="selection"
            @click="to_elderly()"
          >
            <v-img
              v-bind:src="require('@/assets/landing_elderly.jpg')"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span>高齢者</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    to_elderly() {
      this.$router.push({path : 'elderly'})
    },
    to_students() {
      this.$router.push({path : 'students'})
    },
  }
};
</script>

<style scoped lang="scss">
  #landing {
    height: 100vh;
    background: black;
  }
  #landing_title {
    color: orange;
    font-size: 50pt;
  }
  #landing_vision {
    color: orange;
    font-size: 20pt;
  }
  .selection {
    cursor: pointer;
    color: orange;
    font-weight: bold;
    font-size: 40pt;
    border-radius: 50px;
  }
</style>
