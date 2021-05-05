<template>
  <div class="page">
    <Scroll />
  </div>
</template>

<script>
import Scroll from '@/components/Scroll.vue'
export default {
  name: 'page',
  components: {
    Scroll
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
