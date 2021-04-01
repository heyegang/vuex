<template>
  <div class="back">
    <!-- SEARCH -->
    <ai-search :data="StrSearch" :options="options">
      <template #searchs>
        <el-input
          placeholder="请输入搜索内容"
          v-model="input2"
          style="width:400px"
          :validate-event="false"
        >
          <template slot="append">
            <div @click="search">
              <i class="el-icon-search"></i>
            </div>
          </template>
        </el-input>
      </template>
      <!-- ADD -->
      <template #adds>
        <el-button type="primary" @click="TakeoutUsers">添加用户</el-button>
      </template>
      <template #btn='scope'>
        <el-button type="primary" #click="login(scope)">确定</el-button>
      </template>
    </ai-search>

    <!-- TAB -->
    <ai-table
      :data="Administrations"
      :columns="columns"
      border
      :extend="extend"
    >
      <template #action="scope">
        <el-button type="primary" @click="edit(scope.scope)" size="mini">
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button type="danger" @click="cls" size="mini">
          <i class="el-icon-delete"></i>
        </el-button>
        <el-button type="warning" @click="distribution" size="mini">
          <i class="el-icon-setting"></i>
        </el-button>
      </template>

      <template #switchs>
        <el-switch :v-model="value"> </el-switch>
      </template>
    </ai-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let userModule = createNamespacedHelpers("Administration");
let { mapState: AdmState, mapActions: AdmActions } = userModule;
import AiTable from "../../components/aitable/AiTable";
import AiSearch from "../../components/aisearch/AiSearch";
export default {
  name: "",
  props: {},
  data() {
    return {
      value: true,
      pagenum: 1,
      pagesize: 5,
      query: "",
      // 表格配置项
      columns: [
        {
          label: "姓名",
          prop: "username",
          align: "center"
        },
        {
          label: "角色",
          prop: "role_name",
          align: "center"
        },
        {
          label: "电话",
          prop: "mobile",
          align: "center"
        },
        {
          label: "邮箱",
          prop: "email",
          align: "center"
        },
        {
          label: "状态",
          prop: "mg_state",
          align: "center",
          slot: "switchs"
        },
        {
          label: "操作",
          prop: "",
          align: "center",
          slot: "action"
        }
      ],
      // 序号项
      extend: [
        {
          type: "index",
          label: "#"
        }
      ],
      // 表单配置项
      options: [
        {
          // 用户名框
          // 表单类型
          type: "input",
          label: "用户名",
          prop: "username",
          placeholder:"请输入用户名",
          // 输入内容
          value: "",
          // 规则
          rules:[
            {
              // 必传
              require: true,
              // 提示
              message: "用户名不能为空",
              // 失去焦点后提交
              trigger: "blur"
            }
          ],
          // 除了props里面之外接受其他的属性
          
        },
        {
          // 密码框
          type: "input",
          label: "密码",
          prop: "password",
          placeholder:'请输入密码',
          value: "",
          rules: [
            {
              require: true,
              message: "密码不能为空",
              trigger: "blur"
            }
          ],
          attrs: {
            "show-password": true
          }
        },
        {
          // 邮箱框
          type: "input",
          label: "邮箱",
          prop: "email",
          placeholder:'请输入邮箱',
          value: "",
          rules: [
            {
              trigger: "blur"
            }
          ],
        },
        {
          // 电话框
          type: "input",
          label: "电话",
          prop: "mobile",
          placeholder:'请输入电话',
          value: "",
          rules: [
            {
              trigger: "blur"
            }
          ],
        },
      ],
      input2: "",
      // username: "",
      // password: "",
      // email: "",
      // mobile: ""
    };
  },
  components: {
    AiTable,
    AiSearch
  },
  methods: {
    ...AdmActions(["getusers", "getquery", "postuser"]),
    // 编辑角色
    edit(scope) {
      console.log(scope);
    },
    // 删除角色
    cls() {
      console.log(1);
    },
    // 分配角色
    distribution() {
      console.log(2);
    },
    // 搜索
    search() {
      this.getquery({
        id: this.input2
      });
      console.log(this.StrSearch);
    },
    // 添加用户
    TakeoutUsers() {
      console.log(1)
    },
    //
    login(scope){
console.log(scope)
    },
  },
  mounted() {
    // 获取表格数据
    this.getusers({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize
    }),
      console.log(this.Administrations);
    //
  },
  computed: {
    ...AdmState(["Administrations", "StrSearch", "Add"])
  },
  watch: {}
};
</script>

<style lang='scss' scoped>
.back {
  color: black;
}
</style>