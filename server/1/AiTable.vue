<template>
  <div>
    <el-table
      v-loading="!data.length"
      :data="tableData"
      :stripe="stripe"
      :border="border"
      :row-class-name="rowClassName"
      :height="height"
      :element-loading-text="loadingOptions.text"
      :element-loading-spinner="loadingOptions.icon"
      :element-loading-background="loadingOptions.color"
      @cell-click="cellClick"
    >
      <template v-if="extend && extend.length">
        <el-table-column
          v-for="(item, index) in extend"
          :key="index"
          :type="item.type"
          :label="item.label"
          :width="item.width"
          :align="item.align"
        >
          <template slot-scope="scope">
            <slot
              name="expand"
              :scope="scope"
              v-if="item.type === 'expand'"
            ></slot>
            <div v-else>
              {{
                item.indexMethod ? item.indexMethod(scope.$index) : scope.$index
              }}
            </div>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        v-for="item in config.slice(0, config.length - 1)"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
        :sortable="item.sortable"
      >
        <template slot-scope="scope">
          <div v-if="item.slot">
            <slot :name="item.slot" :data="scope.row"></slot>
          </div>
          <div v-else>
            <div
              class="flex"
              v-if="item.isEdit && scope.row[scope.column.label + 'editFlag']"
            >
              <el-input
                ref="input"
                size="mini"
                v-model="scope.row[item.prop]"
                @blur="blur(scope)"
              ></el-input>
              <el-button
                class="btn"
                type="primary"
                size="mini"
                @click.stop="ok(scope)"
                >确认</el-button
              >
              <el-button size="mini" @click.stop="cancel(scope)"
                >取消</el-button
              >
            </div>
            <div v-else :class="{ 'c-p': item.isEdit }">
              {{ scope.row[item.prop] }}
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="actionConfig.label" :align="actionConfig.align">
        <template slot-scope="scope">
          <slot name="action" :scope="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination" v-if="data.length">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: '',
  props: {
    // 表格数据
    data: {
      type: Array,
      required: true
    },
    // 配置项
    config: {
      type: Array,
      required: true
    },
    // 斑马纹
    stripe: {
      type: Boolean,
      default: false
    },
    // 边框
    border: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: Function
    },
    // 流体高度
    height: {
      type: Number
    },
    // 排序和展开项
    extend: {
      type: Array
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number
    },
    loadingOptions: {
      type: Object,
      default: () => {
        return {
          text: '',
          icon: '',
          color: ''
        }
      }
    }
  },
  components: {

  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('changeSize', val)
    },
    handleCurrentChange(val) {
      this.$emit('changeCurrent', val)
    },
    cellClick(row, column) {
      let flag = column.label + 'editFlag'
      this.$set(row, flag, true)
      this.$nextTick(() => {
        this.$refs.input[0].focus()
      })
    },
    ok(scope) {
      let flag = scope.column.label + 'editFlag'
      scope.row[flag] = false
      this.$emit('ok', scope)
    },
    cancel(scope) {
      let flag = scope.column.label + 'editFlag'
      scope.row[flag] = false
      this.$emit('cancel', scope)
    },
    blur(scope) {
      setTimeout(() => {
        let flag = scope.column.label + 'editFlag'
        scope.row[flag] = false
      }, 80)
    }
  },
  mounted() {
    if (!this.loadingOptions.text) this.loadingOptions.text = '加载中...'
    if (!this.loadingOptions.icon) this.loadingOptions.icon = 'el-icon-loading'
    if (!this.loadingOptions.color) this.loadingOptions.background = '#fff'
    this.tableData = cloneDeep(this.data)
  },
  watch: {
    data: {
      handler(val) {
        this.tableData = val
      },
      deep: true
    }
  },
  computed: {
    actionConfig() {
      return this.config[this.config.length - 1]
    }
  }
}
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
  align-items: center;
  .btn {
    margin-right: 3px;
    margin-left: 8px;
  }
}
.pagination {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
}
.c-p {
  cursor: pointer;
}
</style>