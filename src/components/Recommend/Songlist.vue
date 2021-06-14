<template>
  <div class="song">
      <div class="song-top">
          <h3>推荐歌曲</h3>
      </div>
      <ul class="song-list">
          <li v-for="value in songs" :key="value.id" class="item" @click="selectMusic">
              <!-- <img :src="value.picUrl" alt=""> -->
              <img v-lazy="value.picUrl" alt="">
              <div>
                  <h3>{{value.name}}</h3>
                  <p>{{value.song.artists[0].name}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SongList',
  props: {
    songs: {
      type: Array,
      // 默认值
      default: () => [],
      required: true
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    selectMusic () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.song{
     @include bg_sub_color();
    width: 100%;
     .song-top{
        width: 100%;
        height: 84px;
        line-height: 84px;
        @include bg_sub_color();
        border-bottom: 1px solid #ccc;
        padding: 0 20px;
        h3{
            @include font_size($font_large);
            font-weight: bold;
            @include font_color();
        }
    }
    .song-list{
        width: 100%;
        overflow: hidden;
        .item{
            width: 100%;
            height: 200px;
            display: flex;
            align-items: center;
            padding: 0 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #ccc;
            img{
                width: 150px;
                height: 150px;
                border-radius: 20px;
                margin-right: 20px;
            }
            div{
                h3{
                    @include font_size($font_large);
                    @include font_color();
                }
                p{
                    @include font_size($font_small);
                    @include font_color();
                    opacity: 0.6;
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>
