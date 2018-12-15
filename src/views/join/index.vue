<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <h1>Registration Form</h1>
          <Register/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Register from "./components/registration_form.vue";
export default {
  name: "Join",
  components: {
    Register
  }
};
</script>

<style scoped lang="scss">
</style>
