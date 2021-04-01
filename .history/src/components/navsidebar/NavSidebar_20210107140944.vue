<template>
  <div>
   <el-row class="tac" style="width: 200px;">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item indexs="0">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu v-for="(item,index) in layouts" :key="index" index="{{item.id}}">
        <template slot="title">
          <span>
            {{item.authName}}
          </span>
        </template>
        <el-menu-item-group v-for="(items,indexs) in layouts.children" :key="indexs">
          <el-menu-item>{{item.authName}}</el-menu-item>
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
  mounted() {
    console.log(this.layouts)
  },
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