import { EventEmitter } from 'events'
import Dispatcher from '../dispathcer/Dispatcher'
import EntryConstants from '../constants/EntryConstants'

import { http } from '../components/Http'

const CHANGE_EVENT = 'change';
const URL = '/api/entries/';

let _entries = {};

function update(res) {
  callback(res);
};

class EntryStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _entries;
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
    case EntryConstants.INSERT:
      http.post(URL, action.data).then(res => {
      }).catch(e => {
        //console.error(e);
      });
      break;

    default:
      // no OP
  }
});

const entryStore = new EntryStore();
export default entryStore;
