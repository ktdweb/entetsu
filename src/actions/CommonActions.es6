import Dispatcher from '../dispathcer/CommonDispatcher'
import CommonConstants from '../constants/CommonConstants'

export default {
  get: () => {
    Dispatcher.dispatch({
      actionType: CommonConstants.GET
    })
  }
}
