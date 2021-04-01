import api from '../http/api';
import router from '../router';
import { Message } from "element-ui";


export default {
  namespaced:true,
  state: {
    // 存放数据
    layout:[]
  },
  mutations: {
    // 同步修改state
    setLayout(state,data){
      state.layout = data
    }
  },
  actions: {
    async gettype({commit},params){
      let res = await api.gettype(params)
      if(res.data.status === 200){
        commit('setLayout',res.data)
      }else {
        Message.error(res.data.msg)
      }
    },
  },
}