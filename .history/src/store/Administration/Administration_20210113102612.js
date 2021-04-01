import { Message } from "element-ui";
import api from '../../http/api';

export default({
  namespaced:true,

  state: {
    // 存放数据
    Administrations:[],
    StrSearch:[],
    Add:[],
  },
  mutations: {
    // 同步修改state
    setAdministration(state,data){
      state.Administrations = data
    },
    setStrSearch(state,data){
      state.StrSearch = data
    },
    setAdd(state,data){
      state.Add = data
    },
  },
  // 数据列表
  actions: {
    // 获取表格数据请求
    async getusers({commit},params){
      let res =await api.getusers(params)
      if(res.meta.status === 200) {
        console.log(res)
        commit('setAdministration',res.data.users)
      } else {
        Message.error(res.meta.msg)
      }
    },
    // 搜索请求事件
    async getquery({commit},params){
      let res =await api.getquery(params)
      if(res.meta.status === 200) {
        console.log(res)
        commit('setStrSearch',res.data)
      } else {
        Message.error(res.meta.msg)
      }
    },
    // 添加用户
    async postuser({commit},params){
      let res =await api.postuser(params)
      if(res.meta.status === 200) {
        console.log(res)
        commit('setAdd',res.data)
      } else {
        Message.error(res.meta.msg)
      }
    }
  },
  
})