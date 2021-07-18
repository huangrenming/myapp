<template>
  <a-table
    :columns="columns"
    :data-source="data"
  >
    <a
      slot="name"
      slot-scope="text,record"
      @click="expand(record)"
    >
      <span v-if="['parent', 'child'].includes(record.type)">
        <a-icon
          v-if="!record.isExpand"
          type="plus-square"
        />
        <a-icon
          v-else
          type="minus-square"
        />
      </span>
      <span v-if="record.type === 'parent'">{{record.parent}}</span>
      <span v-if="record.type === 'child'">&nbsp;&nbsp;&nbsp;{{record.child}}</span>
      <span v-if="record.type === 'child2'">{{record.child2}}</span>
    </a>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true
  }
]

const data = [
  {
    key: '1',
    id: 1,
    type: 'parent',
    parent: 'parent-01',
    child: 'child-01',
    child2: 'child2-01',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '1',
    id: 2,
    type: 'parent',
    parent: 'parent-02',
    child: 'child-02',
    child2: 'child2-02',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '1',
    id: 3,
    type: 'parent',
    parent: 'parent-03',
    child: 'child-03',
    child2: 'child2-03',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  }
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  //   tags: ['loser']
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher']
  // }
]

export default {
  data() {
    return {
      data,
      columns
    }
  },
  methods: {
    expand(item) {
      if (!item.isExpand) {
        if (item.type === 'parent') {
          const next = [
            {
              key: '2',
              id: `${item.id}_01`,
              type: 'child',
              parentId: item.id,
              parent: 'parent',
              child: 'child',
              child2: 'child2',
              age: 32,
              address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
              tags: ['nice', 'developer']
            }
          ]

          this.data.forEach((v, index) => {
            if (v.id == item.id) {
              this.data.splice(index + 1, 0, ...next)
            }
          })
        } else if (item.type === 'child') {
          const next2 = [
            {
              key: '2',
              id: `${item.id}_01`,
              parentId: item.id,
              type: 'child2',
              parent: 'parent',
              child: 'child',
              child2: 'child2',
              age: 32,
              address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
              tags: ['nice', 'developer']
            }
          ]
          this.data.forEach((v, index) => {
            if (v.id == item.id) {
              this.data.splice(index + 1, 0, ...next2)
            }
          })
        }

        this.$set(item, 'isExpand', true)
      } else {
        this.removeChild(item)

        this.$set(item, 'isExpand', false)
      }
    },
    removeChild(item) {
      const childs = [item.id]
      this.data.forEach((v) => {
        if (v.parentId === item.id) {
          if (v.type === 'child') {
            childs.push(v.id)
          }
        }
      })
      this.data = this.data.filter((v) => {
        if ([...childs].includes(v.parentId)) {
          return false
        }
        return true
      })

      console.log(this.data, 2)
    }
  }
}
</script>
