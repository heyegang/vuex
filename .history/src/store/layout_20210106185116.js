import api from '../http/api';
import { Message } from "element-ui";
import router from '../router';


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