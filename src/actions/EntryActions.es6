import Dispatcher from '../dispathcer/Dispatcher'
import EntryConstants from '../constants/EntryConstants'

export default {
  insert: (data, callback) => {
    Dispatcher.dispatch({
      actionType: EntryConstants.INSERT,
      data: data,
      callback: callback
    })
  }
}
