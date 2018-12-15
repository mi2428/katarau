<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <h1>SignIn</h1>
          <v-text-field
            v-model="email"
            label="Email address">
          </v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :type="show ? 'text' : 'password'"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignIn",
  components: {
  },
  data() {
    return {
      show: false,
      email: "",
      password: ""
    };
  }
}
</script>

<style scoped lang="scss">
</style>
