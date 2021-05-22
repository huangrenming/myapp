<template>
  <div class="v-table__warp">
    <table class="table_default1">
      <tr>
        <th
          v-for="item in tableTh"
          :key="item.prop"
        >
          {{item.label}}
        </th>
      </tr>
      <tr
        v-for="(tr,i) in dataList"
        :key="i+Date.now()"
      >
        <td
          v-for="v in tableTh"
          :key="v.prop"
        >{{tr[v.prop]}}</td>
      </tr>
    </table>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableTh: [
        {
          prop: 'date',
          label: '时间'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      dataList: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  created() {
    this.tableTh = []
    this.$children &&
      this.$children.map((tab, index) => {
        if (index === 0) {
          this.tabValue = tab.label
        }
        this.tableTh.push({
          prop: tab.prop,
          label: tab.label
        })
      })

    console.log(this.tableTh, 88, this.$children)
  },
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
