<template>
  <div class="box">
    <div>
      <slot name='searchs'></slot>
      <slot #append></slot>
    </div>
    <div class="add">
      <slot name="adds"></slot>
    </div>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    // search(){
    //   this.getquery({
    //     id:this.input2
    //   })
    //   console.log(this.StrSearch);
    // }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  position: relative;
  top: 30px;
  margin-bottom: 50px;
  display: flex;
}
.add {
  margin-left: 20px;
}
</style>