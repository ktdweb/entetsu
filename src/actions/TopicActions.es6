import Dispatcher from '../dispathcer/TopicDispatcher'
import TopicConstants from '../constants/TopicConstants'

export default {
  create: () => {
    Dispatcher.dispatch({
      actionType: TopicConstants.CREATE
    })
  },

  category: (id) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.CATEGORY,
      id: id
    })
  },

  slider: (start, end) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.SLIDER,
      start: start,
      end: end
    })
  },

  keyword: (keyword) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.KEYWORD,
      keyword: keyword
    })
  },

  adminGet: (id = '') => {
    Dispatcher.dispatch({
      actionType: TopicConstants.ADMIN_GET,
      id: id
    })
  },

  adminEach: (id) => {
    Dispatcher.dispatch({
      actionType: TopicConstants.ADMIN_EACH,
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
