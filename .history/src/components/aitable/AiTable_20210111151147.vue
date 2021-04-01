<template>
  <!-- <div>
    <ai-form></ai-form>
  </div> -->
    <el-table
      :data="data"
      style="width: 100%">
      <el-table-column
      v-for="(item,index) in columns"
      :key="index"
      :prop="item.prop"
      :label="item.label">
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