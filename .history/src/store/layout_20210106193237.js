import api from '../http/api';
import { Message } from "element-ui";



export default {
  namespaced:true,
  state: {
    // 存放数据
    layouts:[]
  },
  mutations: {
    // 同步修改state
    setLayout(state,data){
      state.layouts = data
    }
  },
  actions: {
    async gettype({commit},params){
      let res = await api.gettype(params)
      console.log(111)
      if(res.meta.status === 200){
       
        commit('setLayout',res.data)
      }else {
        Message.error(res.meta.msg)
      }
    },
  },
}