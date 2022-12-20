import Vue from 'vue'
import dayjs from 'dayjs'
// moment: 不再更新了，目前只进行维护(弃坑了)
// dayjs: api和moment基本完全一样，而且体积比较小

// 加载中文语言包
import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

Vue.filter('relativeTime', value => {
  // value就是接收到的文章的发布时间
  // 处理value成相对时间
  return dayjs().to(dayjs(value))
})
