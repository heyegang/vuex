import { Message } from "element-ui";
import api from '../../http/api';

export default({
  namespaced:true,

  state: {
    // 存放数据
    Administrations:[],
    StrSearch:[]
  },
  mutations: {
    // 同步修改state
    setAdministration(state,data){
      state.Administrations = data
    },
    setStrSearch(state,data){
      state.StrSearch = data
    }
  },
  // 数据列表
  actions: {
    async getusers({commit},params){
      let res =await api.getusers(params)
      if(res.meta.status === 200) {
        console.log(res)
        commit('setAdministration',res.data.users)
      } else {
        Message.error(res.meta.msg)
      }
    },
    async getquery({commit},params){
      let res =await api.getquery(params)
      if(res.meta.status === 200) {
        console.log(res)
        commit('StrSearch',res.data)
      } else {
        Message.error(res.meta.msg)
      }
    }

  },
  // 搜索请求事件
})