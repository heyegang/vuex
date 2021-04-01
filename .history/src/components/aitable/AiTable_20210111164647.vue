<template>
  <!-- <div>
    <ai-form></ai-form>
  </div> -->
    <el-table
      :border="border"
      :data="data"
      style="width: 100%"
      >
      <el-table-column
      v-for="(item,index) in columns"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      align
      >
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