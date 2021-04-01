<template>
  <div class="box">
    <div>
      <slot name="searchs"></slot>
      <slot #append></slot>
    </div>
    <div class="add">
      <slot name="adds"></slot>
    </div>
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- key不能绑定在template中 -->
        <template v-for="(item, index) in options">
          <el-form-item :key="index" :label="item.label" :prop="item.prop">
            <!-- 生成图表 -->
            <!-- is内跟传过来的标签名：样式标签 -->
            <component :is="`el-${item.type}`" v-model="ruleForm[item.prop]"></component>
          </el-form-item>
        </template>
      </el-form>
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
    },
    options:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      ruleForm: {},
      rules: {}
    };
  },
  components: {},
  methods: {
    // search(){
    //   this.getquery({
    //     id:this.input2
    //   })
    //   console.log(this.StrSearch);
    // }
    // 初始化from
    initForm(){
      let ruleForm = {}
      let rules = {}
      this.options.map(item => {
        ruleForm[item.prop] = item.value
        rules[item.prop] = item.rules
      })
      this.ruleForm = cloneDeep(ruleForm)
      this.rules = cloneDeep(rules)
    }
  },
  mounted() {
    this.initForm()
  },
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