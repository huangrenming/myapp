<template>
  <div
    v-if="active"
    v-show="active"
    :id="`pane-${paneName}`"
    class="v-tab-pane"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VTabPane',

  props: {
    label: String,
    name: String
  },

  data() {
    return {
      index: null
    }
  },

  computed: {
    active() {
      const active = this.$parent.currentName === (this.name || this.index)
      return active
    },
    paneName() {
      return this.name || this.index
    }
  }
}
</script>
