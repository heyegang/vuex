<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :width="width"
    :show-close="showClose"
    @close="close"
  >
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      ref='form'
    >
      <template v-for="(item, index) in options">
        <el-form-item
          v-if="!item.children"
          :key="index"
          :label="item.label"
          :prop="item.prop"
        >
          <component
            v-bind="item.attrs"
            :placeholder="item.placeholder"
            :is="`el-${item.type}`"
            v-model="ruleForm[item.prop]"
          >
           <slot name="upload" v-if="item.type === 'upload'"></slot>
          </component>
        </el-form-item>
        <el-form-item
          v-if="item.children"
          :key="index"
          :label="item.label"
          :prop="item.prop"
        >
          <component
            v-bind="item.attrs"
            :placeholder="item.placeholder"
            :is="`el-${item.type}`"
            v-model="ruleForm[item.prop]"
          >
            <component
              v-for="(child, i) in item.children"
              :key="i"
              :is="`el-${child.type}`"
              :value="child.value"
              :label="child.label"
              :name="child.name"
            ></component>
          </component>
        </el-form-item>
      </template>
    </el-form>
    <template #footer>
      <slot name="footer" :form="form" :values="values"></slot>
    </template>
  </el-dialog>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: '',
  props: {
    // dialog标题
    title: {
      type: String,
      default: '标题'
    },
    // dialog宽度
    width: {
      type: String,
      default: '30%'
    },
    // dialog显示隐藏
    visible: {
      type: Boolean,
      default: false
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    },
    // 表单配置项
    options: {
      type: Array,
      required: true
    }
  },
  components: {

  },
  data() {
    return {
      dialogVisible: false,
      ruleForm: {},
      rules: {},
      form: {}
    }
  },
  methods: {
    close() {
      this.$emit('update:visible', !this.visible)
    },
    // 初始化表单
    initForm() {
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
    this.dialogVisible = this.visible
    this.initForm()
  },
  watch: {
    visible(val) {
      this.dialogVisible = val
      this.$nextTick(() => {
        this.form = this.$refs.form
      })
    },
    options: {
      handler() {
        this.initForm()
      },
      deep: true
    }
  },
  computed: {
    values() {
      return cloneDeep(this.ruleForm)
    }
  }
}
</script>

<style scoped lang='scss'>
</style>