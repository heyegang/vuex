<template>
  <div class="box">
    <el-table :data="data" style="width: 100%" :border="border">
      <template v-if="extend && extend.length">
        <el-table-column :label="item.label" :type="item.type" v-for="(item) in extend" :key="item.type"></el-table-column>
      </template>
      
      <el-table-column
        :label="item.label"
        v-for="(item, index) in options"
        :key="index"
        :align="item.align"
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
    extend:{
      type:Array,
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
.box {
  color: black;
}
</style>