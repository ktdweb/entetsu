import Dispatcher from '../dispathcer/TopicDispatcher'
import TopicConstants from '../constants/TopicConstants'

export default {
  create: () => {
    Dispatcher.dispatch({
      actionType: TopicConstants.CREATE
    })
  },

  adminGet: (id = '') => {
    Dispatcher.dispatch({
      actionType: TopicConstants.ADMIN_GET,
      id: id
    })
  },

  adminUpdate: (obj) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.ADMIN_UPDATE,
      obj: obj
    })
  },

  adminDelete: (id) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.ADMIN_DELETE,
      id: id
    })
  },

  update: (id, count) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.UPDATE,
      id: id,
      count: count
    })
  },

  destroy: () => {
    Dispatcher.dispatch({
      actionType: TopicConstants.DESTROY
    })
  }
}
