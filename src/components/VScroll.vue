<template>
  <vue-seamless-scroll :data="listData" class="warp auto-scroll" :class-option="classOption">
    <ul>
      <li v-for="(item, index) in listData" :key="index">
        <span class="title" v-text="item.title"></span>
        <span class="date" v-text="item.date"></span>
      </li>
    </ul>
  </vue-seamless-scroll>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: 'Example01Basic',
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
      listData: [],
      classOption: {
        step: 0.5
      }
    }
  },
  created() {
    for (let i = 0; i <= 50; i++) {
      this.listData.push({
        title: `无缝滚动第一行无缝滚动第 ${i} 行`,
        date: `2017-12-16- ${i}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 250px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  overflow: hidden;

  ul {
    list-style: none;
    list-style: none;
    padding: 0;
    margin: 0 auto;
    li,
    a {
      display: block;
      font-size: 15px;
      height: 36px;
      margin-bottom: 4px;
      line-height: 36px;
      display: flex;
      justify-content: space-between;
      background: rgb(21, 255, 0);
    }
  }
}
/*滚动条整体部分,必须要设置*/
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: rgb(233, 233, 233);
}
/*滚动条的轨道*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(105, 105, 105, 0.3);
  background-color: rgb(233, 233, 233);
}
/*滚动条的滑块按钮*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #bbb;
  box-shadow: inset 0 0 5px rgb(124, 124, 124);
}
/*滚动条的上下两端的按钮*/
::-webkit-scrollbar-button {
  height: 0;
  background-color: rgb(233, 233, 233);
}

::-webkit-scrollbar {
  /* 滚动条整体样式 */
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 10px;
}
::-webkit-scrollbar-thumb {
  /* 滚动条里面小方块 */
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #eeeeee;
}
::-webkit-scrollbar-track {
  /* 滚动条里面轨道 */
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
  border-radius: 10px;
}
/* 需要滚动的地方加上这个class */
.auto-scroll {
  overflow: overlay;
}
.auto-scroll ::-webkit-scrollbar {
  /* 组件内滚动条不显示 */
  display: none;
}
.auto-scroll:hover ::-webkit-scrollbar {
  /* 悬停时滚动条才显示 */
  display: block;
}
</style>
