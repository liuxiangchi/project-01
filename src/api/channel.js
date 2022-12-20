import request from '@/utils/request'
export function loadArticleList (params) {
  return request({
    url: '/v1_0/articles',
    params
  })
}
