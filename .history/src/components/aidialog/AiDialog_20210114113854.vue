<template>
  <!-- .sync:可以直接修改父组件的值 -->
  <div class="box">
    <!-- 添加弹框 -->
    <!-- 添加用户表单 -->
    <el-dialog 
    :visible.sync="visible" 
    :title="title" 
    @close="close"
    :hide-required-asterisk="true"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        :validate-on-rule-change="false"
      >
        <!-- key不能绑定在template中 -->
        <template v-for="(item, index) in options">
          <el-form-item :key="index" :label="item.label" :prop="item.prop">
            <!-- 生成图表 -->
            <!-- is内跟传过来的标签名：样式标签 -->
            <component
              :is="`el-${item.type}`"
              v-model="ruleForm[item.prop]"
              :placeholder="item.placeholder"
              v-bind="item.attrs"
            ></component>
          </el-form-item>
        </template>
        <template>
          <slot
            name="btn"
            :from="this.$refs.ruleForm"
            :values="ruleForm"
          ></slot>
        </template>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "",
  props: {
    options: {
      type: Array,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type:String,
      default:'标题'
    },
  },
  data() {
    return {
      ruleForm: {},
      rules: {},
      dialogVisible: false
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
    initForm() {
      let ruleForm = {};
      let rules = {};
      this.options.map(item => {
        ruleForm[item.prop] = item.value;
        rules[item.prop] = item.rules;
      }),
      this.ruleForm = cloneDeep(ruleForm);
      this.rules = cloneDeep(rules);
      console.log(ruleForm);
      console.log(rules);
    },
    close(){
      this.$emit('update:visible',!this.visible)
    }

  },
  mounted() {
    this.initForm();
    this.dialogVisible=this.visible
  },
  computed: {},
  watch: {
    options: {
      // 监听表单变化，并更新
      handler() {
        this.initForm();
      },
      deep: true
    },
    dialogVisible(){
      this.dialogVisible = !this.dialogVisible
    }
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