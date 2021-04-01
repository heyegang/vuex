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
    // 得到权限
    async gettree({commit},params){
      let res = await api.gettree(params)
      if(res.meta.status === 200){
       console.log(res)
        commit('settree',res.data)
      }else {
        Message.error(res.meta.msg)
      }
    },
    // 角色列表
    async getroles({commit},params){
      let res = await api.getroles(params)
      if(res.meta.status === 200){
       console.log(res)
        commit('setroles',res.data)
      }else {
        Message.error(res.meta.msg)
      }
    },
    // 删除角色
    async deleteRolesId(_,params){
      let res = await api.deleteRolesId(params)
      if(res.meta.status === 200){
       console.log(res)
       Message.success('删除成功')
      }else {
        Message.error(res.meta.msg)
      }
    },
  },
})