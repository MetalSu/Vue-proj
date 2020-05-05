// 处理演出信息接口请求

// 引入 axios
import request from '@/utils/request'

// 获取演出数据
export const getSeachP = () => {
  return request({
    url: '/showstart/api/wap/activity/searchparams.json',
    method: 'GET',
    // 需要请求体参数，使用data
    // 需要查询字符串 时使用params
    params: {
      st_flpv: '1587480386946hmMV4bKA44r7qUQa2MZ4',
      sign: '',
      trackPath: '',
      terminal: 'wap'
    }
  })
}

// 获取搜索结果
export const getResultP = (style) => {
  return request({
    url: '/showstartapi/wap/activity/list.json',
    method: 'GET',
    // 需要请求体参数，使用data
    // 需要查询字符串 时使用params
    params: {
      pageNo: 2,
      cityCode: 532,
      keyword: '',
      style: style,
      tag: '',
      tagType: '',
      activityIds: '',
      couponCode: '',
      performerId: '',
      hosterId: '',
      siteId: '',
      st_flpv: '1587480386946hmMV4bKA44r7qUQa2MZ4',
      sign: '',
      trackPath: '',
      terminal: 'wap'
    }
  })
}

// 获取输入框搜索结果
export const getInputP = (keyword) => {
  return request({
    url: '/showstartapi/wap/activity/list.json',
    method: 'GET',
    // 需要请求体参数，使用data
    // 需要查询字符串 时使用params
    params: {
      pageNo: 1,
      cityCode: 532,
      keyword: keyword,
      style: '',
      tag: '',
      tagType: '',
      activityIds: '',
      couponCode: '',
      performerId: '',
      hosterId: '',
      siteId: '',
      st_flpv: '1587480386946hmMV4bKA44r7qUQa2MZ4',
      sign: '',
      trackPath: '',
      terminal: 'wap'
    }
  })
}

// 获取推荐
export const getHotP = () => {
  return request({
    url: '/showstart/api/wap/theme/list.json',
    method: 'GET',
    // 需要请求体参数，使用data
    // 需要查询字符串 时使用params
    params: {
      pageNo: 1,
      st_flpv: '1587480386946hmMV4bKA44r7qUQa2MZ4',
      sign: '',
      trackPath: '',
      terminal: 'wap'
    }
  })
}

// 获取推荐

export const getRaiseP = () => {
  return request({
    url: '/showstart/api/wap/raise/list.json',
    method: 'GET',
    // 需要请求体参数，使用data
    // 需要查询字符串 时使用params
    params: {
      pageNo: 1,
      st_flpv: '1587480386946hmMV4bKA44r7qUQa2MZ4',
      sign: '',
      trackPath: '',
      terminal: 'wap'
    }
  })
}
