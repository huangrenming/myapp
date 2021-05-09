<script>
import AnchoredHeading from './AnchoredHeading.vue'
import VScroll from './VScroll.vue'
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render() {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
        <VScroll />
      </AnchoredHeading>
    )
  }
}
</script>
