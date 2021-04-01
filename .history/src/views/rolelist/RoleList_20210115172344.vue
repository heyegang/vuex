<template>
  <el-card class="box-card">
    <el-button type="primary">添加角色</el-button>
    <role-list-table 
    :options="options"
    :extend="extend"
    :data="roles" 
    border
    >
    <template #btn="scope">
      <el-button type="primary" size="mini" @click="edit(scope.scope)">
          编辑
        </el-button>
        <el-button type="danger" size="mini" @click="cls">
          删除
        </el-button>
        <el-button type="warning" size="mini" @click="AssignPermissions">
          分配权限
        </el-button>
    </template>
    <template #expand="scope">
      <div v-for="item in scope.scope.row.children" :key="item.id">
        {{item.authName}}
      </div>
        
    </template>
    </role-list-table>
</el-card>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
let userModule = createNamespacedHelpers('rolelist')
let {mapState: RolelistState,mapActions: RolelistActions} = userModule
import RoleListTable from '../../components/rolelisttable/RoleListTable'
export default {
  name: '',
  props:{},
  data () {
    return {
      type:"list",
      options:[
        {
          label:'职位',
          prop:'roleName',
          align:'center',
        },
        {
          label:'描述',
          prop:'roleDesc',
          align:'center'
        },
        {
          label:'操作',
          prop:'',
          align:'center',
          slot:'btn'
        },
      ],
      extend:[
        {
          type:'expand',
          slot:'expand',
        },
        {
          type:'index',
          label:'#',
        },
        
      ]

    }
  },
  components: {
    RoleListTable,
  },
  methods: {
    ...RolelistActions(['gettree','getroles','deleteRolesId']),
    // 编辑
    edit(scope) {
      console.log(scope);
    },
    // 删除
    cls(){
      console.log(1)
    },
    // 分配权限
    AssignPermissions(){
      console.log(2)
    },
  },
  mounted() {
    this.gettree(this.type)
    this.getroles()
    // this.deleteRolesId()
  },
  computed: {
    ...RolelistState(['tree','roles'])
  },
  watch: {}
}
</script>

<style lang='scss' scoped>
  .box-card {
    width: 100%;
    height: 96%;
    position: relative;
    top: 3%;
  }
</style>