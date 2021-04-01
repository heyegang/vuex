<template>
  <div>
    <el-container>
      <el-header>
        <nav-header></nav-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-sidebar :layouts='layouts' v-if='layouts.length>0'></nav-sidebar>
        </el-aside>
        <el-main>
          <nav-label></nav-label>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavHeader from "../../components/navheader/NavHeader";
import NavSidebar from "../../components/navsidebar/NavSidebar";
import NavLabel from "../../components/navlabel/NavLabel";
import {createNamespacedHelpers} from 'vuex'
let userModule = createNamespacedHelpers('layout')
let {mapState: layoutState,mapActions: layoutActions} = userModule
export default {
  name: "",
  props: {},
  data() {
    return {
      sidebars:[]
    };
  },
  components: {
    NavHeader,
    NavSidebar,
    NavLabel,
  },
  methods: {
    ...layoutActions(['gettype'])
  },
  mounted() {
    this.gettype()
  },
  computed: {
    ...layoutState(['layouts'])
  },
  watch: {}
};
</script>

<style lang='scss' scoped>
.el-header,
.el-footer {
  line-height: 60px;
}

.el-aside {
  position: fixed;
  top: 60px;
  bottom: 0;
  background-color: gray;
}

.el-main {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 60px;
  left: 200px;
  border: 1px solid #eeeeee;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>