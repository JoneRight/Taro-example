/*
 * @Author: 张平
 * @Date: 2019-05-30 11:14:33
 * @Last Modified by:   张平
 * @Last Modified time: 2019-05-30 11:14:33
 */

import { ADD, MINUS } from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
