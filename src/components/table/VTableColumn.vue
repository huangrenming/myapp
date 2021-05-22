<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: '',

  props: {
    label: String,
    prop: String
  },

  data() {
    return {
      index: null
    }
  },

  computed: {}
}
</script>
