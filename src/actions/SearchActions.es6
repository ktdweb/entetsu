import Dispatcher from '../dispathcer/Dispatcher'
import SearchConstants from '../constants/SearchConstants'

export default {
  create: () => {
    Dispatcher.dispatch({
      actionType: SearchConstants.CREATE
    })
  },

  updateField: (field, val) => {
    Dispatcher.dispatch({
      actionType: SearchConstants.UPDATEFIELD,
      field: field,
      val: val
    })
  },

  destroy: () => {
    Dispatcher.dispatch({
      actionType: SearchConstants.DESTROY
    })
  }
}
