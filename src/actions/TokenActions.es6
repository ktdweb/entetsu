import Dispatcher from '../dispathcer/Dispatcher'
import TokenConstants from '../constants/TokenConstants'

export default {
  check: (token, callback) => {
    Dispatcher.dispatch({
      actionType: TokenConstants.CHECK,
      token: token,
      callback: callback
    })
  },

  reset: (mail, callback) => {
    Dispatcher.dispatch({
      actionType: TokenConstants.RESET,
      mail: mail,
      callback: callback
    })
  }
}
