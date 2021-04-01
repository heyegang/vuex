<template>
  <div class="box">
    <div>
      <slot name="searchs"></slot>
      <slot #append></slot>
    </div>
    <!-- 添加弹框 -->
    <!-- 添加用户表单 -->
    
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "",
  props: {
    data: {
      type: Array,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    // visible:{
    //   type:Boolean,
    //   default:false
    // }
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
    // initForm() {
    //   let ruleForm = {};
    //   let rules = {};
    //   this.options.map(item => {
    //     ruleForm[item.prop] = item.value;
    //     rules[item.prop] = item.rules;
    //   }),
    //     (this.ruleForm = cloneDeep(ruleForm));
    //   this.rules = cloneDeep(rules);
    //   console.log(ruleForm);
    //   console.log(rules);
    // }
  },
  mounted() {
    this.initForm();
  },
  computed: {
    
  },
  watch: {
    // options: {
    //   // 监听表单变化，并更新
    //   handler(){
    //     this.initForm()
    //   },
    //   deep:true
    // }
  }
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