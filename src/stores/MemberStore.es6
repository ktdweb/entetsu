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
  mail: '',
  password: '',
  gender: '',
  age: '',
  birthday: '',
  zip: '',
  prefecture: '',
  city: '',
  address: '',
  detail_flag: '',
  created: '',
  modified: ''
  }
];

function create(res) {
  _members = res;
}

function memberAdminDelete(id) {
  Object.keys(_members).map((i) => {
    if (_members[i].id == id) {
      delete _members[i];
    }
  });
}

function add(res) {
  _members = res;
}

function login(res, cb) {
  cb(res[0]);
  //return res[0];
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

    case MemberConstants.ADD:
      http.post(URL, action.data).then(res => {
      }).catch(e => {
        //console.error(e);
      });
      break;

    case MemberConstants.SET:
      http.post(URL + 'set/', action.data).then(res => {
      }).catch(e => {
        //console.error(e);
      });
      break;

    case MemberConstants.LOGIN:
      http.post(URL + 'login', action.data).then(res => {
        login(res, action.callback);
      }).catch(e => {
        //console.error(e);
      });
      break;

    case MemberConstants.MEMBER_ADMIN_DELETE:
      let admin_delete = URL + 'admin/' + action.id;
      http.delete(admin_delete).then(res => {
        memberAdminDelete(action.id);
        memberStore.update();
      }).catch(e => {
        // console.error(e);
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
