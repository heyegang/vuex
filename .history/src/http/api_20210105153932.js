import http from './index'

export default{
     login({username,password}){
        return http.post('/login',{
            username,
            password
        })
     }
}