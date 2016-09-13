import * as action from '../actions'
import { combineReducers } from 'redux'

function formReducer(state, action) {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  formReducer
});
