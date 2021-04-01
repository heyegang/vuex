<template>
  <div>
  <el-row class="tac">
    <el-col :span="12">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="0">
        <span slot="title">首页</span>
      </el-menu-item>
      <div v-for="(item,i) in layouts" :key="i">
        <el-submenu :index="item.order" v-if="item.children">
          <template slot="title">
            <span>
              {{item.authName}}
            </span>
          </template>
          <el-menu-item-group :index="val.id" v-for="(val,indexs) in item.children" :key="indexs">
            <el-menu-item>{{val.authName}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
      
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