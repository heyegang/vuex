<template>
  <div>
    <el-table :data="options" style="width: 100%">
      
        <el-table-column :prop="item.prop" :label="item.label"  v-for="(item,index) in options" :key="index">
          <template></template>
        </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    options:{
      type:Array,
      required:true
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>