/*
 * - 郵便番号自動入力クラス
 * YubinBangoをes6用に移植
 *
 * 使用例 (react.js)
 * new YubinBango(e.target.value, function(addr) {
 *   _this.setState( { region: addr.region } );
 * });
 *
 * @class YubinBango
 * @constructor
 */

/*
 * 再検索時用のキャッシュ
 *
 * @property CACHE
 * @const
 * @type {Array}
 * @default undefined
 */
let CACHE = [];

export default class YubinBango {
  
  constructor(inputVal, callback) {
    if (inputVal) {
      let a = inputVal.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
      let b = a.match(/\d/g);
      let c = b.join('');
      let yubin7 = this.chk7(c);
 
      if (yubin7) {
        this.getAddr(yubin7, callback);
      }
    }
  }

  /*
   * ７桁かどうかの確認
   *
   * @method chk7
   * @public
   * @param val {Number} ７桁の数字
   * @return val
   */
  chk7(val) {
    if (val.length === 7) {
      return val;
    }
  }

  /*
   * 問い合わせ先のURLをscriptタグとしてDOM追加し読込
   *
   * @method jsonp
   * @public
   * @param url {String} 問い合わせ先URL
   * @param fn {Function} callback
   * @return vold
   */
  jsonp (url, fn) {
    window['$yubin'] = function (data) { return fn(data); };
    var scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("charset", "UTF-8");
    scriptTag.setAttribute("src", url);
    document.head.appendChild(scriptTag);
  }

  /*
   * jsonpにより読み込んだdataをオブジェクトに展開
   *
   * @method getAddr
   * @public
   * @param yubin7 {Number} 7桁の数字
   * @param fn {Function} callback
   * @return vold
   */
  getAddr (yubin7, fn) {
    let _this = this;
    let yubin3 = yubin7.substr(0, 3);
    if (this.cachecheck(yubin7, yubin3)) {
      fn(_this.selectAddr(yubin7, CACHE[yubin3][yubin7]));
    } else {
      this.jsonp(YubinBango.URL + "/" + yubin3 + ".js", function (data) {
        CACHE[yubin3] = data;
        fn(_this.selectAddr(yubin7, data[yubin7]));
      });
    }
  }

  /*
   * オブジェクトに展開し返す
   * REGION配列に照らしあわせ県名を取得
   * 
   * @method selectAddr
   * @public
   * @param yubin7 {Number} 7桁の数字
   * @param addr {Object} URLに問い合わせし返ってきたObject
   * @return Object
   */
  selectAddr (yubin7, addr) {
    var res = {
      'region_id': '',
      'region': '',
      'locality': '',
      'street': '',
      'extended': ''
    };

    if (addr) {
      let ext = (addr[3]) ? addr[3] : '' ;
      res = {
        'region_id': addr[0],
        'region': YubinBango.REGION[addr[0]],
        'locality': addr[1],
        'street': addr[2],
        'extended': ext
      };
    }
    
    return res;
  }
  

  /*
   * キャッシュに存在するかチェック
   * 
   * @method cachecheck
   * @public
   * @param yubin7 {Number} 7桁の数字
   * @param yubin3 {Number} 3桁の数字
   * @return Boolean
   */
  cachecheck(yubin7, yubin3) {
    if (CACHE[yubin3]) {
      return true;
    }
  }
}

/*
 * 問い合わせ先URL
 *
 * @property YubinBango.URL
 * @public
 * @type {String}
 */
YubinBango.URL = 'https://yubinbango.github.io/yubinbango-data/data';

/*
 * 都道府県
 *
 * @property YubinBango.REGION
 * @public
 * @type {Array}
 */
YubinBango.REGION = [
  null, '北海道', '青森県', '岩手県', '宮城県',
  '秋田県', '山形県', '福島県', '茨城県', '栃木県',
  '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県',
  '長野県', '岐阜県', '静岡県', '愛知県', '三重県',
  '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県',
  '和歌山県', '鳥取県', '島根県', '岡山県', '広島県',
  '山口県', '徳島県', '香川県', '愛媛県', '高知県',
  '福岡県', '佐賀県', '長崎県', '熊本県', '大分県',
  '宮崎県', '鹿児島県', '沖縄県'
];
