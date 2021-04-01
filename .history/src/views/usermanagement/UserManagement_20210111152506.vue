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
    <ai-table :data="Administrations" :columns="columns"></ai-table>
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
        },
        {
          label:'角色',
           prop:'role_name',
        },
        {
          label:'电话',
           prop:'mobile',
        },
        {
          label:'邮箱',
           prop:'email',
        },
        {
          label:'状态',
           prop:'mg_state',
        },
        {
          label:'操作',
           prop:'',
            
        },
      ]
    }
  },
  components: {
    AiTable,
  },
  methods: {
    ...AdmActions(['getusers'])
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