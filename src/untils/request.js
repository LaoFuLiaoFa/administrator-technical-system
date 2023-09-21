// api.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://150.158.53.178:6290', // 设置API基本URL
  timeout: 5000 // 设置请求超时时间
})

// eslint-disable-next-line no-undef
axios.post('http://150.158.53.178:6290/api/adminLogin', loginData)
  .then(response => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTUwLjE1OC41My4xNzg6NjI5MC9hcGkvYWRtaW5Mb2dpbiIsImlhdCI6MTY5NTA5NDI1OSwiZXhwIjoxNjk1MDk3ODU5LCJuYmYiOjE2OTUwOTQyNTksImp0aSI6InMwNmNzY3Bnd0RURnJRQnkiLCJzdWIiOiIyIiwicHJ2IjoiYmFjZGMzNWM5NzliNGE4N2M2Y2U2MWI4MjJlNDJmODQzMzU5NDY2ZiIsInJvbGUiOiJhZG1pbnMifQ.wWn_jSW_u-zmKGwIliOdKhCuJsZldpoqhPq7sfs0xzg'
    // 将令牌保存在本地存储或Cookies中，以便后续使用
    localStorage.setItem('userToken', token)
    // 登录成功后的其他操作
  })
  .catch(() => {
    // 处理登录失败的情况
  })
// 封装GET请求
export const get = (url, params = {}) => {
  return instance.get(url, { params })
}

// 封装POST请求
export const post = (url, data = {}) => {
  return instance.post(url, data)
}

// 封装PUT请求
export const put = (url, data = {}) => {
  return instance.put(url, data)
}

// 封装DELETE请求
export const del = (url) => {
  return instance.delete(url)
}
function getToken () {
  // 从本地存储或者Cookies中获取用户令牌
  // 你可以根据你的身份验证方法进行修改
  return localStorage.getItem('userToken') || ''
}
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求被发送之前做些什么
    // 例如，可以在请求头中添加认证信息
    // eslint-disable-next-line no-undef
    config.headers.Authorization = 'Bearer' + getToken() // 你的认证逻辑
    return config
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 在响应数据被处理之前做些什么
    // 例如，可以处理全局的成功提示或者对响应数据进行处理
    return response.data
  },
  (error) => {
    // 处理响应错误
    // 例如，可以处理全局的错误提示或者重新登录等操作
    return Promise.reject(error)
  }
)

export default instance
