import { EventEmitter } from 'events'
import Dispatcher from '../dispathcer/Dispatcher'
import MemberConstants from '../constants/MemberConstants'

import { http } from '../components/Http'

const CHANGE_EVENT = 'change';
const URL = '/api/members/';

let _members = [
  {
    id: '',
    name: '',
    furi: '',
    tel: '',
    mail: ''
  }
];

function create(res) {
  _members = res;
}

function update(id, updates) {
  _members = { id: id, member: updates };
}

function destroy() {
  _members = {};
}

class MemberStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _members;
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
    case MemberConstants.CREATE:
      http.get(URL).then(res => {
        create(res);
        memberStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case MemberConstants.UPDATE:
      update(action.id, action.member + 1);
      memberStore.update();
      break;

    case MemberConstants.DESTROY:
      destroy();
      memberStore.destroy();
      break;

    default:
      // no OP
  }
});

const memberStore = new MemberStore();
export default memberStore;
