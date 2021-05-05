<template>
  <div class="fullscreen">
    <fullscreen class="dd" :fullscreen.sync="fullscreen">
      <slot></slot>
    </fullscreen>
    <button class="btn" type="button" @click="toggle">Fullscreen</button>
  </div>
</template>
<script>
import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(fullscreen)
export default {
  data() {
    return {
      fullscreen: false
    }
  },
  methods: {
    toggle() {
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>
<style lang="scss" scoped>
.dd,
.fullscreen {
  position: relative;
  width: 100%;
  height: 100%;
}
.btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
