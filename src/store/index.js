import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import layout from "./layout";
import Administration from "./Administration/Administration";
import rolelist from "./rolelist/rolelist"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 存放数据
  },
  mutations: {
    // 同步修改state
  },
  actions: {},
  modules: {
    // 代表模块
    user,
    layout,
    Administration,
    rolelist,
  }
});
