import Mock from 'mockjs'

import homeApi from './mockServerData/home'
import userApi from './mockServerData/user'
Mock.mock(/home\/getData/, homeApi.getStatisticalData)
// Mock.mock('/api/user/getUser', userApi.getUserList)


Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/del/,'get',userApi.deleteUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/add/,'post',userApi.createUser)