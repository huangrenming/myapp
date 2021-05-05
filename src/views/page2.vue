<template>
  <Fullscreen>
    <div class="page2">
      <div class="top"></div>
      <div class="content">
        <div class="l">
          <div class="inner-up">
            <div class="box"></div>
          </div>
          <div class="inner-mm">
            <div class="box">
              <Scroll />
            </div>
          </div>
        </div>
        <div class="m">
          <div class="inner-up">
            <div class="box"></div>
          </div>
          <div class="inner-dw">
            <div class="box" ref="zxtu"></div>
          </div>
          <div class="inner-dw">
            <div class="box"></div>
          </div>
        </div>
        <div class="r">
          <div class="inner-up">
            <div class="box"></div>
          </div>
          <div class="inner-dw">
            <div class="box">
              <Scroll />
            </div>
          </div>
          <div class="inner-dw">
            <div class="box"></div>
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </Fullscreen>
</template>

<script>
import * as echarts from 'echarts'
import Fullscreen from '@/components/Fullscreen.vue'
import Scroll from '@/components/Scroll.vue'
export default {
  name: 'page2',
  components: { Fullscreen, Scroll },
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.initEchart()

    window.addEventListener('resize', () => {
      this.initEchart()
    })
  },
  methods: {
    initEchart() {
      this.$nextTick(() => {
        let zxtu = this.$refs.zxtu
        if (zxtu) {
          zxtu.innerHTML = ''
          this.zxtu(zxtu)
        }
      })
    },
    zxtu(el) {
      let divEl = document.createElement('div')
      let bc = el.getBoundingClientRect()

      divEl.style.cssText = `width:${bc.width}px;height:${
        bc.height ? bc.height : 200
      }px;padding: 20px 10px 10px 10px;box-sizing: border-box;`
      let myChart = echarts.init(divEl)
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: [
            '衬衫',
            '羊毛衫',
            '雪纺衫',
            '裤子',
            '高跟鞋',
            '袜子',
            'null',
            'null',
            'null'
          ]
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 0, 0, 0]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
      // myChart.clear()
      // myChart.dispose()

      return el.appendChild(divEl)
    }
  }
}
</script>
<style lang="scss" scoped>
.page2 {
  position: relative;
  width: 100%;
  height: 100%;
  background: #a0a0a0;
  display: flex;
  flex-direction: column;
  min-height: 720px;

  .top {
    flex: 0 0 50px;
    background: #fc0101;
  }
  .bottom {
    flex: 0 0 40px;
    background: #ff0000;
  }
  .content {
    flex: 1;
    background: #f4f7f5;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .l,
    .m,
    .r {
      display: flex;
      flex-direction: column;
      width: 33.3333%;
      height: 100%;
      float: left;
      box-sizing: border-box;
    }
  }

  .inner-up {
    flex: 1;
    width: 100%;
    height: 33.333%;
    padding: 5px;
    box-sizing: border-box;
  }
  .inner-dw {
    flex: 1;
    width: 100%;
    height: 33.333%;
    padding: 5px;
    box-sizing: border-box;
  }

  .inner-mm {
    flex: 2.02;
    width: 100%;
    height: 66.66666%;
    padding: 5px;
    box-sizing: border-box;
  }
}

.box {
  width: 100%;
  height: 100%;
  background: rgb(187, 248, 187);

  padding: 10px;
  box-sizing: border-box;
}
</style>

