import Dispatcher from '../dispathcer/Dispatcher'
import WorkConstants from '../constants/WorkConstants'

export default {
  create: () => {
    Dispatcher.dispatch({
      actionType: WorkConstants.CREATE
    })
  },

  category: (id) => {
    Dispatcher.dispatch({
      actionType: WorkConstants.CATEGORY,
      id: id
    })
  },

  slider: (start, end) => {
    Dispatcher.dispatch({
      actionType: WorkConstants.SLIDER,
      start: start,
      end: end
    })
  },

  keyword: (keyword) => {
    Dispatcher.dispatch({
      actionType: WorkConstants.KEYWORD,
      keyword: keyword
    })
  },

  update: (id, count) => {
    Dispatcher.dispatch({
      actionType: WorkConstants.UPDATE,
      id: id,
      count: count
    })
  },

  destroy: () => {
    Dispatcher.dispatch({
      actionType: WorkConstants.DESTROY
    })
  }
}
