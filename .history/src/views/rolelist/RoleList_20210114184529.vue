<template>
  <el-card class="box-card">
    <el-button type="primary">添加角色</el-button>
    <role-list-table 
    :options="options"
    :data="roles" 
    border
    ></role-list-table>
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
      type:'tree',
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
          align:'center'
        },
      ]

    }
  },
  components: {
    RoleListTable,
  },
  methods: {
    ...RolelistActions(['gettree','getroles'])
  },
  mounted() {
    this.gettree()
    this.getroles()
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