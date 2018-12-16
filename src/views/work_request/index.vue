<template>
<v-content>
  <v-layout fluid>
    <v-flex xs12 sm6 offset-sm3>
        
        <v-container
          fluid
          grid-list-md
        >
      <v-card>
        <v-img
           v-bind:src="require('@/views/student/components/1.jpeg')"
           height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">付き添いサービス</div>
            <span class="grey--text">依頼者：75歳男性，電動車イス</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="purple">内容</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            依頼内容：基本的には自分で動けるので外出先で付き添い，見守っていてほしい
            日時：1/15(火)11：00~（2・3h）
            場所：新宿近辺
            謝礼：1時間当たり750円＋依頼者との昼ご飯付き
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      
      <v-card>
        <v-img
           v-bind:src="require('@/views/student/components/2.jpeg')"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">付き添いサービス</div>
            <span class="grey--text">依頼者：75歳男性，電動車イス</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="purple">内容</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            依頼内容：基本的には自分で動けるので外出先で付き添い，見守っていてほしい
            日時：2/22(火)17：30~20：00（2・3h）
            場所：女子栄養大近辺
            謝礼：1時間当たり750円＋依頼者との昼ご飯(4000円相当)付き
          </v-card-text>
        </v-slide-y-transition>
      </v-card>

      
      <v-card>
        <v-img
           v-bind:src="require('@/views/student/components/3.jpeg')"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">PCお助けサービス</div>
            <span class="grey--text">依頼者75歳男性</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="purple">内容</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            依頼内容：PCのネット接続が頻繁に切れてしまう，セキュリティソフトの設定
            日時：12/18日am,19日pm,20日am,21日am,22日ampm,23日ampm,26日pm,27日amのいずれか
            場所：高田馬場の新大久保から徒歩10分
            謝礼：1時間当たり750円
          </v-card-text>
        </v-slide-y-transition>
      </v-card>

         </v-container>
      

    </v-flex>
  </v-layout>
</v-content>
</template>

<script>
  export default {
    name: "Workrequest",
    data: () => ({
      show: false
    })
  }
</script>
<style scoped lang="scss">
</style>
