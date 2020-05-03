// 处理演出信息接口请求

// 引入 axios
import request from '@/utils/request'

// 获取演出数据
export const getShowList = () => {
  return request({
    url: '/showstart/api/wap/activity/list.json',
    method: 'GET',
    // 需要请求体参数，使用data
    // 需要查询字符串 时使用params
    params: {
      pageNo: 1,
      cityCode: 532,
      showTime: 7,
      st_flpv: '1587480386946hmMV4bKA44r7qUQa2MZ4',
      sign: '',
      trackPath: '',
      terminal: 'wap'
    }
  })
}
