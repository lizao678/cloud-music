<template>
  <div class="player">
      <NormalPlayer></NormalPlayer>
      <MiniPlayer @showList="showList"></MiniPlayer>
      <ListPlayer ref="listPlayer"></ListPlayer>
  </div>
</template>

<script>
import NormalPlayer from '../components/Player/NormalPlayer.vue'
import MiniPlayer from '../components/Player/MiniPlayer.vue'
import ListPlayer from '../components/Player/ListPlayer.vue'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  methods: {
    showList () {
      this.$refs.listPlayer.show()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
