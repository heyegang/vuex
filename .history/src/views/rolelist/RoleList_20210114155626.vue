<template>
  <el-card class="box-card">
  <div class="text item">
    <el-button type="primary">添加角色</el-button>
    
  </div>
</el-card>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
let userModule = createNamespacedHelpers('rolelist')
let {mapState: RolelistState,mapActions: RolelistActions} = userModule
export default {
  name: '',
  props:{},
  data () {
    return {
      type:'tree',

    }
  },
  components: {},
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
.text {
    font-size: 14px;
  }

  // .item {
  //   padding: 18px 0;
  // }

  .box-card {
    width: 100%;
    height: 96%;
    position: relative;
    top: 3%;
    
  }
</style>