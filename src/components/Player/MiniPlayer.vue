<template>
<transition @enter="enter" @leave="leave">
   <div class="mini-player" v-show="this.isShowMiniPlayer">
      <div class="player-warpper">
          <div class="player-left" @click="showNormal">
              <img src="https://p1.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg" alt="" >
              <div class="player-title">
                  <h3>演员</h3>
                  <p>薛之谦</p>
              </div>
          </div>
          <div class="player-right">
            <div class="play"></div>
            <div class="list" @click.stop="showList"></div>
          </div>
      </div>
  </div>
</transition>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'MiniPlayer',
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    showNormal () {
      this.setMiniPlayer(false)
      this.setFullScreen(true)
    },
    showList () {
      this.$emit('showList')
    },
    enter (el, done) {
      Velocity(el, 'transition.bounceUpIn', { duration: 500 }, () => {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.bounceDownOut', { duration: 500 }, () => {
        done()
      })
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer'
    ])
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.mini-player{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    .player-warpper{
        width: 100%;
        height: 100%;
        @include bg_color();
        display: flex;
        align-items: center;
        justify-content: space-between;
        .player-left{
            display: flex;
            padding-left: 30px;
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                // margin: 0 20px;
                margin-right: 20px;
                border: 4px solid #000;
            }
        }
        .player-title{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h3{
                @include font_size($font_medium);
                // @include font_color();
                color: #fff;
            }
            p{
                @include font_size($font_medium_s);
                // @include font_color();
                color: #fff;
            }
        }
    }
    .player-right{
        display: flex;
        align-items: center;
        .play{
            width: 84px;
            height: 84px;
            @include bg_img('../../assets/images/play')
        }
        .list{
            width: 120px;
            height: 120px;
            @include bg_img('../../assets/images/list')
        }
    }

}
</style>
