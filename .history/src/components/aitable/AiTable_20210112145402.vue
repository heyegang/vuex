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
      v-for="(item,index) in columns.slice(0, columns.length - 1)"
      :key="index"
      :label="item.label"
      :align='item.align'
      >
      <template slot-scope="scope">
        <div v-if="item.slot" :scope="scope"> 
          <slot :name="item.slot"></slot>
        </div>
        <div v-else>
          {{scope.row[item.prop]}}
        </div>
      </template>
      </el-table-column>
      

      <!-- <el-table-column :label="columns[columns.length-2].label">
        <template>
          <slot name="switchs"></slot>
        </template>
      </el-table-column> -->

      <!-- <el-table-column>
        <template slot-scope="scope">
          <slot name="action" :scope="scope"></slot>
        </template>
      </el-table-column> -->

      <el-table-column :label="action.label" align='center'>
        <template slot-scope="scope">
          <slot name="action" :scope="scope"></slot>
        </template>
      </el-table-column>
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
  methods: {
    action(){

    }
  },
  mounted() {},
  computed: {},
  watch: {
    action(){
      return this.columns[this.columns.length-1]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>