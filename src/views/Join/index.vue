<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <h1>RegistrationFoam</h1>
          
          <Regist></Regist>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Regist from "./components/RegistrationFoam.vue";
export default {
  name: "Join",  
  components: {
    Regist
  }
};
</script>

<style scoped lang="scss">
</style>
