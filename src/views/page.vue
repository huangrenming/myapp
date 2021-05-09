<template>
  <div class="page">
    <v-scroll />
  </div>
</template>

<script>
import VScroll from '@/components/VScroll.vue'
export default {
  name: 'Page',
  components: {
    VScroll
  },
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.page {
  width: 400px;
  height: 360px;
  margin: 0 auto;
  background: #ccc;
}
</style>
