import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net'
})

request.interceptors.request.use(
  config => {
    if (store?.state?.user?.token) {
      config.headers.Authorization = 'Bearer ' + store.state.user.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
export default request
