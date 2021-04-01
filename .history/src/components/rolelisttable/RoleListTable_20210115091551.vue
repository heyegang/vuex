<template>
  <div class="box">
    <el-table :data="data" style="width: 100%" :border="border">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="(item, index) in options"
        :key="index"
        :align="item.align"
      >
      <template slot-scope="scope">
        <div v-if="item.slot" :scope="scope">
          <slot name="btn"></slot>
        </div>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    options: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    border: {
      type: Boolean,
      required: true
    },
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
.box {
  color: black;
}
</style>