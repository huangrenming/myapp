<template>
  <div class="v-tabs">
    <div
      class="v-tabs__header"
      :style="headerStyle"
    >
      <span
        v-for="(label ,index) in headderList"
        :key="label + index"
        class="v-tabs__header--label"
        :class="[label == tabValue ? 'v-tabs--action' : '']"
        @click="changeValue(label)"
      >{{label}}</span>
    </div>
    <div class="v-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    headerStyle: Object,
    value: {}
  },
  data() {
    return {
      headderList: [],
      tabValue: '',
      isAction: false,
      currentName: ''
    }
  },
  watch: {
    tabValue() {
      this.currentName = this.tabValue
    }
  },
  mounted() {
    this.headderList = []
    this.$children &&
      this.$children.map((tab, index) => {
        if (index === 0) {
          this.tabValue = tab.label
        }
        this.headderList.push(tab.label)
      })
  },
  methods: {
    changeValue(value) {
      this.tabValue = value
    }
  }
}
</script>

<style scoped lang="scss">
.v-tabs {
  position: relative;
}
.v-tabs__header {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  height: 12px;
  line-height: 12px;
  vertical-align: middle;
  text-align: right;
}
.v-tabs__header--label {
  display: inline-block;
  background: #ccc;
  margin-right: 8px;
  width: 12px;
  height: 12px;
  font-size: 0;
  border-radius: 10px;
  cursor: pointer;
}
.v-tabs--action {
  background: rgb(70, 68, 243);
}
.v-tabs__content {
  background: rgb(241, 218, 218);
  min-height: 120px;
}
</style>
