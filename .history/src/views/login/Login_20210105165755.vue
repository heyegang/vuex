<template>
  <div>
  <!-- <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item> -->
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="font-size:30px;font-weight:bold;">欢迎来到小爱后台管理系统</span>
  </div>
  <div class="InputBox">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="请输入用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="请输入密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
    </el-form>
  </div>
  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
</el-card>

  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        ruleForm:{
            username:'',
            password:'',
        },
        rules:{
            username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
        
    }
  },
  components: {},
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.InputBox {
    text-align: center;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 700px;
    height: 320px;
    margin:0 auto;
    position: relative;
    top: 160px;
    text-align: center;
    
  }
  .demo-ruleForm{
      width: 600px;
  }

</style>