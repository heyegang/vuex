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
          <el-menu-item index="2-1">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">

          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">角色列表</el-menu-item>
          <el-menu-item index="3-2">权限列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">

          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">商品列表</el-menu-item>
          <el-menu-item index="4-2">分类参数</el-menu-item>
          <el-menu-item index="4-3">商品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">

          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">订单列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">

          <span>数据统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">数据报表</el-menu-item>
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
  props:{
    layouts: {
      type:Array,
    }
  },
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
// .tac{
//     width: 200px;
// }
.el-menu-vertical-demo{
    width: 200px;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 60px;

}
</style>