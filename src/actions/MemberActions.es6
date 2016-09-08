import Dispatcher from '../dispathcer/Dispatcher'
import MemberConstants from '../constants/MemberConstants'

export default {
  create: () => {
    Dispatcher.dispatch({
      actionType: MemberConstants.CREATE
    })
  },

  add: (data) => {
    Dispatcher.dispatch({
      actionType: MemberConstants.ADD,
      data: data
    })
  },

  login: (data, callback) => {
    Dispatcher.dispatch({
      actionType: MemberConstants.LOGIN,
      data: data,
      callback: callback
    })
  },

  update: (id, count) => {
    Dispatcher.dispatch({
      actionType: MemberConstants.UPDATE,
      id: id,
      count: count
    })
  },

  destroy: () => {
    Dispatcher.dispatch({
      actionType: MemberConstants.DESTROY
    })
  }
}
