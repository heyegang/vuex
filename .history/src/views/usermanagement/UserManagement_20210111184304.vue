<template>
  <div class="back">
      <!-- <el-table
      :data="Administrations"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="role_name"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
    </el-table> -->
    <ai-table :data="Administrations" :columns="columns" border :extend='extend'>
      <template #action='scope'>
        <el-button type='primary' @click='edit(scope.scope)'>
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button type='danger' @click='cls'>
          <i class="el-icon-delete"></i>
        </el-button>
        <el-button type='warning' @click='distribution'>
          <i class="el-icon-setting"></i>
        </el-button>
      </template>
    </ai-table>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"
let userModule = createNamespacedHelpers('Administration')
let {mapState: AdmState,mapActions: AdmActions} = userModule
import AiTable from "../../components/aitable/AiTable"
export default {
  name: '',
  props:{

  },
  data () {
    return {
      pagenum:1,
      pagesize:5,
      query:'',
      columns:[
        {
          label:'姓名',
          prop:'username',
          align:'center',
        },
        {
          label:'角色',
           prop:'role_name',
           align:'center',
        },
        {
          label:'电话',
           prop:'mobile',
           align:'center',
        },
        {
          label:'邮箱',
           prop:'email',
           align:'center',
        },
        {
          label:'状态',
           prop:'mg_state',
           align:'center',
        },
        {
          label:'操作',
           prop:'',
           align:'center',
            
        },
      ],
      extend: [
        {
          type:'index',
          label:'#'
        },
      ]
    }
  },
  components: {
    AiTable,
  },
  methods: {
    ...AdmActions(['getusers']),
    edit(scope){
      console.log(scope)
    }
  },
  mounted() {
    this.getusers({
      query:'',
      pagenum:this.pagenum,
      pagesize:this.pagesize,
    })
  },
  computed: {
    ...AdmState(['Administrations'])
  },
  watch: {}
}
</script>

<style lang='scss' scoped>
.back{
  color: black;
}
</style>