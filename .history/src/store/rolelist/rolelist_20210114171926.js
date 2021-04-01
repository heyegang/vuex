import api from '../../http/api';
import { Message } from "element-ui";




export default({
  namespaced:true,
  state: {
    // 存放数据
    tree:[],
    roles:[],

  },
  mutations: {
    // 同步修改state
    settree(state,data){
      state.tree = data
    },
    setroles(state,data){
      state.roles = data
    },

  },
  actions: {
    async gettree({commit},params){
      let res = await api.gettree(params)
      if(res.meta.status === 200){
       console.log(res)
        commit('settree',res.data)
      }else {
        Message.error(res.meta.msg)
      }
    },
    async getroles({commit},params){
      let res = await api.getroles(params)
      if(res.meta.status === 200){
       console.log(res)
        commit('setroles',res.data.data)
      }else {
        Message.error(res.meta.msg)
      }
    },
  },
})