import { Message } from "element-ui";
import api from '../../http/api';

export default({
  namespaced:true,

  state: {
    // 存放数据
    Administrations:[]
  },
  mutations: {
    // 同步修改state
    setAdministration(state,data){
      state.Administrations = data
    }
  },
  actions: {
    async getusers({commit},params){
      let res =await api.getusers(params)
      if(res.meta.status === 200) {
        console.log(res)
        commit('setAdministration',res.data.users)
      } else {
        Message.error(res.meta.msg)
      }
    }
  },
})