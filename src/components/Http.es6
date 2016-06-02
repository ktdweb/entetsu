/*
 * - JSONを取得するクラス
 * XMLHTTPRequestをPromiseでラップ
 *
 * 使用例
 * import { http } from '../components/Http' ({}に注意)
 * var url = '/survey/api/entries/reports/';
 *
 * http.get(url).then(res => {
 *   _fields = JSON.parse(res);
 * }).catch(e => {
 *   console.error(e);
 * });
 *
 * @object http
 * @constructor
 */

const Http = {
  http: {
    get: (url) => {
      return new Promise( (resolve, reject) => {

        let rq = new XMLHttpRequest();

        rq.open('GET', url, true);

        rq.setRequestHeader(
          'Content-Type',
          'application/json;charset=utf-8'
        );

        rq.onload = () => {
          if (rq.readyState === 4 && rq.status === 200) {
            resolve(JSON.parse(rq.response));
          } else {
            reject( new Error(rq.statusText) );
          }
        }

        rq.onerror = () => {
          reject( new Error(rq.statusText) );
        }

        rq.send(null);
      });
    },

    put: (url, data) => {
      return new Promise( (resolve, reject) => {

        let rq = new XMLHttpRequest();

        rq.open('PUT', url, true);

        rq.setRequestHeader(
          'Content-Type',
          'application/json;charset=utf-8'
        );

        rq.onload = () => {
          if (rq.readyState === 4 && rq.status === 200) {
            resolve(JSON.parse(rq.response));
          } else {
            reject( new Error(rq.statusText) );
          }
        }

        rq.onerror = () => {
          reject( new Error(rq.statusText) );
        }

        rq.send(JSON.stringify(data));
      });
    },

    post: (url, data) => {
      return new Promise( (resolve, reject) => {

        let rq = new XMLHttpRequest();

        rq.open('POST', url, true);

        rq.setRequestHeader(
          'Content-Type',
          'application/json;charset=utf-8'
        );

        rq.onload = () => {
          if (rq.readyState === 4 && rq.status === 200) {
            resolve(JSON.parse(rq.response));
          } else {
            reject( new Error(rq.statusText) );
          }
        }

        rq.onerror = () => {
          reject( new Error(rq.statusText) );
        }

        rq.send(JSON.stringify(data));
      });
    },

    delete: (url, data) => {
      return new Promise( (resolve, reject) => {

        let rq = new XMLHttpRequest();

        rq.open('DELETE', url, true);

        rq.setRequestHeader(
          'Content-Type',
          'application/json;charset=utf-8'
        );

        rq.onload = () => {
          if (rq.readyState === 4 && rq.status === 200) {
            resolve(JSON.parse(rq.response));
          } else {
            reject( new Error(rq.statusText) );
          }
        }

        rq.onerror = () => {
          reject( new Error(rq.statusText) );
        }

        rq.send(JSON.stringify(data));
      });
    }
  }
}

module.exports = Http;
