import http from '../utils/request'

// 测试数据接口
export const TestList = (params) => {
  return http.fetchGet('product/list', params)
}