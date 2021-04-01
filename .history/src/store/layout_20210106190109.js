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
      console.log(res)
      if(res.data.status === 200){
        commit('setLayout',res.data)
      }else {
        Message.error(res.data.msg)
      }
    },
  },
}