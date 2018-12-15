<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          aaaaaaaaaaaaaaaaaaaaaaaaaa
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
//import UserProfile from "./components/userprofile.vue";

export default {
  name: "User",
  props: ["userId"],
  components: {
    UserProfile
  }
};
</script>
