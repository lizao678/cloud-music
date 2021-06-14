<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
// iscroll-probe专业版，可以监听滚动的位置等细节，增强组件的扩展性
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false,
      probeType: 3,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true
    })
    // setTimeout(() => {
    //   console.log(this.iscroll.maxScrollY)
    //   this.iscroll.refresh()
    //   console.log(this.iscroll.maxScrollY)
    // }, 5000)
    // 1. 创建一个观察者对象
    /*
    MutationObserver构造函数只要监听到了指定内容发生了变化，就会执行传入的回调函数
    mutationList：发生变化的数组
    observer：观察者对象
    */
    const observer = new MutationObserver((mutationList, observer) => {
      // console.log(mutationList)
      // console.log(this.iscroll.maxScrollY)
      this.iscroll.refresh()
      // console.log(this.iscroll.maxScrollY)
    })
    // 2. 告诉观察者对象，我们需要观察什么内容
    const config = {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      subtree: true, // 默认为 false，设置为 true 可以观察后代节点
      attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
    }
    // 3. 告诉观察者对象，我们需要观察谁观察什么内容
    /*
    参数一：告诉观察者需要观察谁
    参数一：告诉观察者需要观察什么内容
    */
    observer.observe(this.$refs.wrapper, config)
  },
  methods: {
    // 提供一个监听滚动距离的方法给外界使用
    scrolling (fn) {
      this.iscroll.on('scroll', function () {
        fn(this.y)
      })
    }
  }
}
</script>

<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
}
</style>
