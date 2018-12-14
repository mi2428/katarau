<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-subheader class="mt-3 grey--text text--darken-1">MENU</v-subheader>
        <v-list-tile-content>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            トップ
          </v-list-tile>
          <v-list-tile to="/students">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            学生
          </v-list-tile>
          <v-list-tile to="/elderly">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            高齢者
          </v-list-tile>
        </v-list-tile-content>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="orange"
      dense
      fixed
      clipped-left
      dark
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">かたらう</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    name:"HeaderToolBar",
    data: () => ({
    drawer: false
  })
}

</script>

<style scoped lang="scss">
</style>






