<template>
  <!-- <div>
    <ai-form></ai-form>
  </div> -->
      <el-table
      :data="data"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
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