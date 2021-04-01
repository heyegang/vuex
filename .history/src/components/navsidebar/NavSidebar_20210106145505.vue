<template>
  <div>
   <el-row class="tac" style="width: 200px;">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">

        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">

          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      

    </el-menu>
  </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        
    }
  },
  components: {},
  methods: {
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.tac{
    width: 200px;
}
</style>