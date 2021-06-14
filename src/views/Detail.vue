<template>
  <div class="detail">
      <SubHeader :title="playlist.name"></SubHeader>
      <DetailTop :path="playlist.coverImgUrl" ref="top"></DetailTop>
      <div class="bottom">
        <ScrollView ref="scrollview">
           <DetailBottom :playlist="playlist.tracks"></DetailBottom>
        </ScrollView>
      </div>
  </div>
</template>

<script>
import SubHeader from '../components/Detail/DetailHeader'
import DetailTop from '../components/Detail/DetailTop'
import DetailBottom from '../components/Detail/DetailBottom'
import ScrollView from '../components/ScrollView.vue'
import { getPlayList, getAlbum } from '../api/index'

export default {
  name: 'Detail',
  components: {
    SubHeader,
    DetailTop,
    DetailBottom,
    ScrollView
  },
  data () {
    return {
      playlist: {}
    }
  },
  created () {
    // console.log(this.$route.params.type)
    if (this.$route.params.type === 'personalized') {
      getPlayList({ id: this.$route.params.id })
        .then((data) => {
        // console.log(data)
          this.playlist = data.playlist
        // console.log(this.playlist)
        // console.log(this.palylist.coverImgUrl)
        })
        .catch(err => {
          console.log(err)
        })
    } else if (this.$route.params.type === 'album') {
      getAlbum({ id: this.$route.params.id })
        .then(data => {
          this.playlist = {
            name: data.album.name,
            coverImgUrl: data.album.picUrl,
            tracks: data.songs
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    const defaultHeight = this.$refs.top.$el.offsetHeight
    // console.log(this.$refs.top)
    this.$refs.scrollview.scrolling((offsetY) => {
      // console.log(offsetY)
      if (offsetY < 0) {
        /*
        注意点：高斯模糊效果非常消耗性能，不推荐在移动端中使用
              如果非要在移动端中使用，那么建议只设置一次
        */
        // const scale = 20 * Math.abs(offsetY) / defaultHeight
        const scale = Math.abs(offsetY) / defaultHeight
        // console.log(scale)
        this.$refs.top.changeMask(scale)
        // this.$refs.top.$el.style.filter = `blur(${scale}px)`
      } else {
        const scale = 1 + offsetY / defaultHeight
        this.$refs.top.$el.style.transform = `scale(${scale})`
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.detail{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @include bg_sub_color();
    // background: #f00;
    .bottom{
      position: fixed;
      top: 500px;
      bottom: 0;
      left: 0;
      right: 0;
    }
}
</style>
