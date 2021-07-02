<template>
  <transition  v-on:enter="enter"   @leave="leave">
    <div class="normal-player" v-show="this.isFullScreen">
    <div class="player-waepper">
      <PlayHeader></PlayHeader>
      <PlayerMiddle></PlayerMiddle>
      <PlayerBottom></PlayerBottom>
    </div>
    <div class="player-bg">
        <img src="https://dfzximg01.dftoutiao.com/news/20210614/20210614134446_5350398987762e5ff84917e9f52af0c9_4.png" alt="">
    </div>
  </div>
  </transition>
</template>

<script>
import PlayHeader from './PlayHeader'
import PlayerMiddle from './PlayerMiddle'
import PlayerBottom from './PlayerBottom'
import { mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'NormalPlayer',
  components: {
    PlayHeader,
    PlayerMiddle,
    PlayerBottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen'
    ])
  },
  methods: {
    enter (el, done) {
      Velocity(el, 'transition.shrinkIn', { duration: 500 }, () => {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.shrinkOut', { duration: 500 }, () => {
        done()
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.normal-player {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // background: pink;
  @include bg_sub_color();
  .player-waepper {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
  }
  .player-bg{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      img{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
          filter: blur(20px)
      }
  }
}
</style>
