import Dispatcher from '../dispathcer/TopicDispatcher'
import TopicConstants from '../constants/TopicConstants'

export default {
  defaults: () => {
    Dispatcher.dispatch({
      actionType: TopicConstants.DEFAULTS
    })
  },

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

  adminInsert: (obj, callback) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.ADMIN_INSERT,
      obj: obj,
      callback: callback
    })
  },

  adminUpdate: (obj, callback) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.ADMIN_UPDATE,
      obj: obj,
      callback: callback
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
