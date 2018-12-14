<template>
  <div class="landing">
    <v-layout row justify-space-around align-center>
      <v-flex xs2>
        <v-btn ripple
          large
          @click="to_students()">学生
        </v-btn>
      </v-flex>
      <v-flex xs2>
        <v-btn ripple
          large
          @click="to_elderly()">高齢者
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
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
.landing {
  height: 100vh;
  background-image: url('~@/assets/landing_background.jpg');
  background-size: cover;
}
</style>
