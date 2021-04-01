<template>
  <!-- <div>
    <ai-form></ai-form>
  </div> -->
    <el-table
      :border="border"
      :data="data"
      style="width: 100%"
      >
      <el-table-column v-if="extend && extend.length">
        <el-table-column
        v-for="(item) in extend"
        :key="item.type"
        :type="item.type"
        :label="item.label"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column
      v-for="(item,index) in columns"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :align='item.align'
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      
      <!-- <el-table-column>
        <template slot-scope="scope">
          <slot name="action" :scope="scope"></slot>
        </template>
      </el-table-column> -->
    </el-table>
</template>

<script>

export default {
  name: '',
  props:{
    data:{
      type:Array,
      required:true
    },
    columns:{
      type:Array,
      required:true
    },
    border:{
      type:Boolean,
      dafault:false,
    },
    extend:{
      type:Array,
    }
  },
  data () {
    return {
      
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>