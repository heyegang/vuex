<template>
  <!-- <div>
    <ai-form></ai-form>
  </div> -->
    <el-table
      :border="border"
      :data="data"
      style="width: 100%"
      :align="center"
      >
      <el-table-column
      v-for="(item,index) in columns"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      >
      </el-table-column>
      <el-table-column
      v-for="(item,index) in columns"
      :key="index"
      >
        <el-switch v-if="item.mg_state === ture"
          :v-model="ture">
        </el-switch>
        <el-switch v-if="item.mg_state === false"
          :v-model="false">
        </el-switch>
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