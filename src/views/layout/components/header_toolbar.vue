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
        <v-toolbar flat class = "transparent">
        <v-list-tile-avatar>
          <v-icon rounded large>face</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
          <v-list-tile-title> Your Name</v-list-tile-title>
          </v-list-tile-content>
        </v-toolbar>
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
            学生パートナー
          </v-list-tile>
          <v-list-tile to="/elderly">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            高齢者パートナー
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
      <v-toolbar-title mr-5 align-center>
        <span class="title">かたらう</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout align-center jistify-end row style="max-width: 600px">
        <v-toolbar-items>
          <v-btn flat to="/students">学生パートナー</v-btn>
          <v-btn flat to="/elderly">高齢者パートナー</v-btn>
          <v-btn flat to="/">サインアウト(test)</v-btn>
          <v-menu offset-y>
            <v-btn flat icon slot="activator">
              <v-icon>face</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile
                v-for = "(item, index) in items"
                :key = "index">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name:"HeaderToolbar",
    data: () => ({
      drawer: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
      })
  }
</script>

<style scoped lang="scss">
</style>






