import { EventEmitter } from 'events'
import Dispatcher from '../dispathcer/Dispatcher'
import WorkConstants from '../constants/WorkConstants'

import { http } from '../components/Http'

const CHANGE_EVENT = 'change';
const URL = '/api/works/';

let _works = [
  {
    id: 0, 
    section_id: 1,
    title: '',
    detail: '',
    location: '',
    time: '',
    time_start: '',
    time_end: '',
    entry_start: '0000-00-00 00:00:00',
    entry_end: '0000-00-00 00:00:00',
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
    img: '',

    abbr_wage: '',
    abbr_time: '',
    unit_wage_id: 1,

    name: '',
    tel: '',
    email: '',
    unit_wage: '',

    created: '',
    modified: ''
  }
];

let def = _works;

function defaultSetting() {
  _works = def;
}

function create(res) {
  /*
  if (res[0].time_id == null) {
    res[0].time_id = 0;
  }
  if (res[0].category_id == null) {
    res[0].category_id = 0;
  }
  if (res[0].location_id == null) {
    res[0].location_id = 0;
  }
  */
  _works = res;
}

function adminCreate(res, callback) {
  callback();
  _works = res;
}

function adminDelete(id) {
  Object.keys(_works).map((i) => {
    if (_works[i].id == id) {
      delete _works[i];
    }
  });
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
    case WorkConstants.DEFAULT:
        defaultSetting();
        workStore.update();
      break;

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
      let slider = URL + 'slider/' + action.start + '/' + action.end + '/' + action.category;
      http.get(slider).then(res => {
        create(res);
        workStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case WorkConstants.KEYWORD:
      let keyword = URL + 'keyword/' + action.keyword;
      http.get(keyword).then(res => {
        create(res);
        workStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case WorkConstants.ADMIN_GET:
      let admin_get = URL + 'admin/' + action.id;
      http.get(admin_get).then(res => {
        create(res);
        workStore.update();
      }).catch(e => {
        //console.error(e);
      });
      break;

    case WorkConstants.ADMIN_EACH:
      let admin_each = URL + 'admin/each/' + action.id;
      http.get(admin_each).then(res => {
        create(res);
        workStore.update();
      }).catch(e => {
        // console.error(e);
      });
      break;

    case WorkConstants.ADMIN_INSERT:
      let admin_insert = URL;
      http.post(admin_insert, action.obj).then(res => {
        adminCreate(res, action.callback);
        workStore.update();
      }).catch(e => {
        // console.error(e);
      });
      break;

    case WorkConstants.ADMIN_UPDATE:
      let admin_update = URL + 'admin/update/';
      http.post(admin_update, action.obj).then(res => {
        adminCreate(res, action.callback);
        workStore.update();
      }).catch(e => {
        // console.error(e);
      });
      break;

    case WorkConstants.ADMIN_DELETE:
      let admin_delete = URL + 'admin/' + action.id;
      http.delete(admin_delete).then(res => {
        adminDelete(action.id);
        workStore.update();
      }).catch(e => {
        // console.error(e);
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
