import { EventEmitter } from 'events'
import Dispatcher from '../dispathcer/TopicDispatcher'
import TopicConstants from '../constants/TopicConstants'

import { http } from '../components/Http'

const CHANGE_EVENT = 'change';
const URL = '/api/topics/';

let _topics = [
  {
    id: '',
    category_id: 1,
    title: '',
    link: '',
    desc: '',
    term_start: '',
    term_end: '',

    created: '',
    modified: ''
  }
];

function create(res) {
  _topics = res;
}

function adminDelete(id) {
  Object.keys(_topics).map((i) => {
    if (_topics[i].id == id) {
      delete _topics[i];
    }
  });
}

function update(id, updates) {
  _topics = { id: id, topic: updates };
}

function destroy() {
  _topics = {};
}

class TopicStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _topics;
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
    case TopicConstants.CREATE:
      http.get(URL).then(res => {
        console.log('test3');
        create(res);
        topicStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case TopicConstants.ADMIN_GET:
      let admin_get = URL + 'admin/' + action.id;
      http.get(admin_get).then(res => {
        create(res);
        topicStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case TopicConstants.ADMIN_UPDATE:
      let admin_update = URL + 'admin/update/';
      http.post(admin_update, action.obj).then(res => {
        //create(res);
        topicStore.update();
      }).catch(e => {
        // console.error(e);
      });
      break;

    case TopicConstants.ADMIN_DELETE:
      let admin_delete = URL + 'admin/' + action.id;
      http.delete(admin_delete).then(res => {
        adminDelete(action.id);
        topicStore.update();
      }).catch(e => {
        // console.error(e);
      });
      break;

    case TopicConstants.UPDATE:
      update(action.id, action.topic + 1);
      topicStore.update();
      break;

    case TopicConstants.DESTROY:
      destroy();
      topicStore.destroy();
      break;

    default:
      // no OP
  }
});

const topicStore = new TopicStore();
export default topicStore;
