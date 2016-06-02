import { EventEmitter } from 'events'
import CountDispatcher from '../dispathcer/CountDispatcher'
import CountConstants from '../constants/CountConstants'

import { http } from '../components/Http'

const CHANGE_EVENT = 'change';

let _counts = {};

function create() {
  let id = ((Math.random() * 999999) | 0).toString(36);
  _counts = { id: id, count: 1 }
}

function update(id, updates) {
  _counts = { id: id, count: updates };
}

function destroy() {
  _counts = {};
}

class CountStore extends EventEmitter {
  create(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _counts;
  }
  
  update() {
    this.emit(CHANGE_EVENT);
  }

  destroy(callback) {
    this.removeAllListeners(CHANGE_EVENT, callback);
  }
}

CountDispatcher.register( function(action) {
  switch(action.actionType) {
    case CountConstants.CREATE:
      create();
      countStore.update();
      break;

    case CountConstants.UPDATE:
      update(action.id, action.count + 1);
      countStore.update();
      break;

    case CountConstants.DESTROY:
      destroy();
      countStore.destroy();
      break;

    default:
      // no OP
  }
});

const countStore = new CountStore();
export default countStore;
