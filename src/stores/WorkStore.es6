import { EventEmitter } from 'events'
import Dispatcher from '../dispathcer/Dispatcher'
import WorkConstants from '../constants/WorkConstants'

import { http } from '../components/Http'

const CHANGE_EVENT = 'change';
const URL = '/api/works/';

let _works = [
  {
    id: '',
    title: '',
    detail: '',
    location: '',
    time: '',
    break: '',
    wage: '',
    days: '',
    holidays: '',
    type: '',
    term: '',
    career: '',
    selling: '',
    cert: '',
    desc: '',
    img: ''
  }
];

function create(res) {
  _works = res;
}

function update(id, updates) {
  _works = { id: id, work: updates };
}

function destroy() {
  _works = {};
}

class WorkStore extends EventEmitter {
  subscribe(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  read() {
    return _works;
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
    case WorkConstants.CREATE:
      http.get(URL).then(res => {
        create(res);
        workStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case WorkConstants.CATEGORY:
      let url = URL + 'category/' + action.id;
      http.get(url).then(res => {
        create(res);
        workStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case WorkConstants.SLIDER:
      let slider = URL + 'slider/' + action.start + '/' + action.end;
      http.get(slider).then(res => {
        create(res);
        workStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case WorkConstants.KEYWORD:
      let keyword = URL + 'keyword/' + action.keyword;
      console.log(action.keyword);
      http.get(keyword).then(res => {
        create(res);
        workStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case WorkConstants.UPDATE:
      update(action.id, action.work + 1);
      workStore.update();
      break;

    case WorkConstants.DESTROY:
      destroy();
      workStore.destroy();
      break;

    default:
      // no OP
  }
});

const workStore = new WorkStore();
export default workStore;
