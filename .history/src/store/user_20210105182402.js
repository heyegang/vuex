import { Message } from "element-ui";
import api from '../../http/api';
import router from '../router'

export default {
    namespaced:true,
    // 开启命名空间
    
    state: {
        // 存放数据
        users:[]
      },
      mutations: {
        // 同步修改state
        setUsers(state,data){
            state.user = data
        }
      },
      actions: {
        //   发请求
        // 所有的方法
        // 登录 每一个action的方法都有两个参数 第一个是store 第二个是请求的参数
        // store可以解构为commit dispatch(提交另外一个action)
        async login(_,params){
            let res = await api.login(params)
            if(res.meta.status === 200){
                // 请求成功 存用户 跳转路由 提示用户
                localStorage.setItem('user', JSON.stringify(res.data))
                localStorage.setItem('token', res.data.token)
                Message.success('登录成功')
                router.push('/')
            } else {
                Message.error(res.meta.msg)
            }
        },
        async getUsers({commit},params){
            let res = await api.getUsers(params)
            if(res.meta.status === 200) {
                commit('setUsers',res.data)
            }else {
                Message.error(res.meta.msg)
            }
        } 
      },
}