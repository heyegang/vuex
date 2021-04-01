<template>
  <div class="back">
     <!-- SEARCH -->
     <ai-search :data="Administrations">
       <template #searchs>
          <el-input placeholder="请输入内容" v-model="input2">
            <template slot="append">
              <i class="el-icon-search"></i>
            </template>
          </el-input>
       </template>
     </ai-search>

     <!-- ADD -->
     <!-- TAB -->
    <ai-table :data="Administrations" :columns="columns" border :extend='extend'>
      
      <template #action='scope'>
        <el-button type='primary' @click='edit(scope.scope)' size="mini">
          
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button type='danger' @click='cls' size="mini">
          <i class="el-icon-delete"></i>
        </el-button>
        <el-button type='warning' @click='distribution' size="mini">
          <i class="el-icon-setting"></i>
        </el-button>
      </template>

      <template #switchs>
        <el-switch :v-model="value">
        </el-switch>  
      </template>
    </ai-table>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"
let userModule = createNamespacedHelpers('Administration')
let {mapState: AdmState,mapActions: AdmActions} = userModule
import AiTable from "../../components/aitable/AiTable"
import AiSearch from "../../components/aisearch/AiSearch"
export default {
  name: '',
  props:{

  },
  data () {
    return {
      value:true,
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
           slot:'switchs',

        },
        {
          label:'操作',
           prop:'',
           align:'center',
           slot:'action'
        },
      ],
      extend: [
        {
          type:'index',
          label:'#'
        },
      ],
      input2:''
    }
  },
  components: {
    AiTable,
    AiSearch,
  },
  methods: {
    ...AdmActions(['getusers','getquery']),
    edit(scope){
      console.log(scope)

    },
    cls(){
      console.log(1)
    },
    distribution(){
      console.log(2)
    }
  },
  mounted() {
    this.getusers({
      query:'',
      pagenum:this.pagenum,
      pagesize:this.pagesize,
    })
    this.getquery({

    })
    console.log(this.Administrations)
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