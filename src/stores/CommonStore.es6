import { EventEmitter } from 'events'
import Dispatcher from '../dispathcer/CommonDispatcher'
import CommonConstants from '../constants/CommonConstants'

import { http } from '../components/Http'

const CHANGE_EVENT = 'change';
const URL = '/api/commons/';

let _commons = {
    'categories': [],
    'groups': [],
    'sections': [] 
};

function update(res) {
  _commons = res;
};

class CommonStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _commons;
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
    case CommonConstants.GET:
      http.get(URL).then(res => {
        update(res);
        commonStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    default:
      // no OP
  }
});

const commonStore = new CommonStore();
export default commonStore;
