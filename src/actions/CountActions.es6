import CountDispatcher from '../dispathcer/CountDispatcher'
import CountConstants from '../constants/CountConstants'

export default {
  create: () => {
    CountDispatcher.dispatch({
      actionType: CountConstants.CREATE
    })
  },

  update: (id, count) => {
    CountDispatcher.dispatch({
      actionType: CountConstants.UPDATE,
      id: id,
      count: count
    })
  },

  destroy: () => {
    CountDispatcher.dispatch({
      actionType: CountConstants.DESTROY
    })
  }
}
