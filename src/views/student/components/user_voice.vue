<template>
    <v-carousel>
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        >
                <v-card>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{item.title}}</h3>
                        <div>{{item.comment}}</div>
                    </div>
                    </v-card-title>
                </v-card>
        </v-carousel-item>
    </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
    //       src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            src: require('@/views/student/components/1.jpeg'),
            title:"蛍光灯を変えてもらいました",
            comment: "暗いと困るのですぐ対応してもらい助かりました"
          },
          {
//            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            src: require('@/views/student/components/2.jpeg'),
            title:"買い物の荷物を持ってもらいました",
            comment: "特売日にたくさん買い物ができて生活が豊かになりました"
          },
          {
  //          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            src: require('@/views/student/components/3.jpeg'),
            title:"瓶のふたを開けました",
            comment:"自分でも老人を手伝うことができてよかったです"
          },
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            src: require('@/views/student/components/4.jpeg'),
            title:"蛍光灯を変えました",
            comment:"授業の空き時間を有効的に使うことができさらに地域に貢献している気がしてとても気持ちがいいです"
          }
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
</style>