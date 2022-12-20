/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

export function login (data) {
  return request({
    method: 'POST',
    url: 'v1_0/authorizations',
    data
  })
}
export function getSmsCode (mobile) {
  return request({
    url: `v1_0/sms/codes/${mobile}`
  })
}
// 获取用户信息
export function getUserInfo () {
  return request({
    url: 'v1_0/user'
  })
}

export function getUserChannels () {
  return request({
    url: 'v1_0/user/channels'
  })
}
