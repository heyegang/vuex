import http from './index'

export default{
     login({username,password}){
        return http.post('/login',{
            username,
            password
        })
     },
    //  getUsers({pagenum,pagesize,query}){
    //      if(query){
    //          return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}&query=${query}`)
    //      } else {
    //          return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}`)
    //      }
         
    //  },
    // 侧边导航栏
     gettype(){
         return http.get('/menus')
     },
    //  用户数据列表
     getusers({query,pagenum,pagesize}){
        if(query){
            return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}&query=${query}`)
        } else {
            return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}`)
        }
     },
    //  添加用户
     postuser({username,password,email,mobile}){
        return http.post(`/users`,
        username,
        password,
        email,
        mobile,
        )
     },
    //  修改用户状态请求
    // modify

    // 查询请求
    getquery(){
        return http.get(`/users/${id}?id=${id}`)
    },
    // 编辑用户提交请求
    putedit({id,email,mobile}){
        return http.put(`/users/${id}?id=${id}&email=${email}&mobile=${mobile}`)
    },
    // 删除用户
    deluser(id){
        return http.delete( `/users/${id}?id=${id}`)
    },
    // 分配用户角色
    putroles({id,rid}){
        return http.put(`/users/${id}/role?id=${id}&rid=${rid}`)
    },
}