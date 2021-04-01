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
     gettype(){
         return http.get('/menus')
     },
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
     }
}