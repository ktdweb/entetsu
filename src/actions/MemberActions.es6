import Dispatcher from '../dispathcer/Dispatcher'
import MemberConstants from '../constants/MemberConstants'

export default {
  create: () => {
    Dispatcher.dispatch({
      actionType: MemberConstants.CREATE
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
