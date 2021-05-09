<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render: function (createElement) {
    return createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子节点数组
    )
  }
}
</script>
