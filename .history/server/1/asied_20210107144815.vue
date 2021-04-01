
<template>
  <div id="index">
	<el-aside width="152px" class="asideNav">
		<el-menu
			:default-active="defaultActive"
			class="el-menu-vertical"
			router
			unique-opened
			:collapse="iscollapse"
			:collapse-transition="false"
			active-text-color='#29A88D'
			background-color="#272D34"
			text-color="#fff"
			@open="handleOpen"
			@close="handleClose">
			<div id="logo" index="/index">
				<img src="../assets/img/logo.png" class="logo">
                <span class="tohide">XXXXXXXX</span>
			</div>
 
			<div v-for="(item,i) in routers" :key="i">
                  <el-submenu :index="item.newcondition" v-if="item.child">
                    <template slot="title">
                      <i :class="item.newicon"></i>
                      <span class="tohide">{{item.title}}</span>
                    </template>
                    <el-menu-item :index="val.newcondition" v-for="val in item.child" :key="val.title">
                        <i class="icon iconfont">*</i>
                        <span>{{val.title}}</span>
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item :index="item.newcondition" v-else > 
                      <i :class="item.newicon"></i>
                      <span slot="title">{{item.title}}</span>
                  </el-menu-item>
                </div>
 
		</el-menu>
		<div class="iscollapse" @click="setcollapse">
			<i class="el-icon-arrow-right" v-if="iscollapse"></i>
			<i class="el-icon-arrow-left" v-else></i>
		</div>
	</el-aside>
	<div class="rightContainer">
		<el-header class="header">
			XXX
		</el-header>
		<el-main>
			<router-view></router-view>
		</el-main>
		<div class="foot">
			XXX
		</div>
	</div>
  </div>
</template>
 
<script>
import $ from "jquery";
export default {
  name: "index",
  data() {
    return {
      defaultActive: "/index/home",
      iscollapse: false,
      logourl: require("../assets/img/logo.jpg"),
      username: null,
      show: false,
      routers: []
    };
  },
  methods: {
    setcollapse() {
      this.iscollapse = !this.iscollapse;
      this.$nextTick(() => {
        if (this.iscollapse) {
          $("#logo").css("width", "64px");
          $(".el-aside").css("width", "auto");
          $(".tohide,.el-submenu__title .el-icon-arrow-right").css(
            "display",
            "none"
          );
        } else {
          $("#logo").css("width", "auto");
          $(".el-aside").css("width", "152px");
          $(".tohide,.el-submenu__title .el-icon-arrow-right").css(
            "display",
            "inline"
          );
        }
      });
    }
  },
  mounted() {
    this.$http
      .post(this.$api.getmenulist, { shop_code: this.$store.state.shop_code })
      .then(res => {
        console.log(res.data);
        let data = res.data;
        if (data.code == 200 && data.result.length > 0) {
          this.routers = data.result;
        }
      })
      .catch(error => {
        this.$message.error(error);
      });
  }
};
</script>
