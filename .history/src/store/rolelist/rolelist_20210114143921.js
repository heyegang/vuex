import api from '../../http/api';
import { Message } from "element-ui";




export default({
  namespaced:true,
  state: {
    // 存放数据
    tree:[]
  },
  mutations: {
    // 同步修改state
    settree(state,data){
      state.tree = data
    }
  },
  actions: {
    async gettree(_,params){
      let res = await api.gettree(params)
      if(res.meta.status === 200){
       console.log(1)
        commit('settree',res.data)
      }else {
        Message.error(res.meta.msg)
      }
    },
  },
})