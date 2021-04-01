import { turn } from "core-js/fn/array";

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
      },
}