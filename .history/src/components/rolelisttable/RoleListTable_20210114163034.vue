<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <template>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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