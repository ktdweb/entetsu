import { EventEmitter } from 'events'
import Dispatcher from '../dispathcer/Dispatcher'
import TokenConstants from '../constants/TokenConstants'

import { http } from '../components/Http'

const CHANGE_EVENT = 'change';
const URL = '/api/tokens/';

let _tokens = {};

function update(res, callback) {
  callback(res);
};

class TokenStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _tokens;
  }
  
  update() {
    this.emit(CHANGE_EVENT);
  }

  destroy(callback) {
    this.removeAllListeners(CHANGE_EVENT, callback);
  }
}

Dispatcher.register( function(action) {
  switch(action.actionType) {
    case TokenConstants.CHECK:
      http.post(URL + 'check', action.token).then(res => {
        update(res, action.callback);
      }).catch(e => {
        //console.error(e);
      });
      break;

    case TokenConstants.RESET:
      http.post(URL + 'reset', action.token).then(res => {
        update(res, action.callback);
      }).catch(e => {
        //console.error(e);
      });
      break;
    default:
      // no OP
  }
});

const tokenStore = new TokenStore();
export default tokenStore;
