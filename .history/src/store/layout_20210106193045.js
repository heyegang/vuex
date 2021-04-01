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
      if(res.data.status === 200){
        console.log(res)
        commit('setLayout',res.data)
      }else {
        Message.error(res.meta.msg)
      }
    },
  },
}