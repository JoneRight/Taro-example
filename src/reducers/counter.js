/*
 * @Author: 张平
 * @Date: 2019-05-30 11:14:12
 * @Last Modified by:   张平
 * @Last Modified time: 2019-05-30 11:14:12
 */

import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state
  }
}
