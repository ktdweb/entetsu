import { EventEmitter } from 'events'
import Dispatcher from '../dispathcer/Dispatcher'
import SearchConstants from '../constants/SearchConstants'

const CHANGE_EVENT = 'change';

let _search = {
  category: '',
  page: 1,
  total: 1,
  keyword: '',
  slider_start: '',
  slider_start: ''
};

function create(res) {
  _search = res;
}

function update(field, val) {
  _search[field] = val;
}

function destroy() {
  _search = {};
}

class SearchStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _search;
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
    case SearchConstants.CREATE:
      break;

    case SearchConstants.UPDATEFIELD:
      update(action.field, action.val);
      searchStore.update();
      break;

    case SearchConstants.DESTROY:
      destroy();
      searchStore.destroy();
      break;

    default:
      // no OP
  }
});

const searchStore = new SearchStore();
export default searchStore;
