/*
 * - ブラウザ判定クラス
 *
 * 使用例
 * let ua = new UserAgent();
 * if (ua.eq_IE9 || ua.eq_IE10) {
 *   console.log('IE9 or 10!');
 * }
 *
 * @class UserAgent
 */

export default class UserAgent {

  /*
   * コンストラクタ
   * IEのどのバージョンか返す
   *
   * @constructor
   * @return mixed {String}
   */
  constructor() {
    let e = typeof window.addEventListener;
    let d = typeof document.documentElement.style.maxHeight;
    let q = document.querySelectorAll;
    let c = typeof document.getElementsByClassName;
    let m = window.matchMedia;
    
    let id = document.uniqueID;
    let mode = document.documentMode;

    return {
      lte_IE6:  e == "undefined" && d == "undefined",
      lte_IE7:  e == "undefined" && q == "undefined",
      lte_IE8:  e == "undefined" && c == "undefined",
      lte_IE9:  id && typeof m == "undefined",
      gte_IE10: id && m ,
      eq_IE8:   id && mode === 8,
      eq_IE9:   id && mode === 9,
      eq_IE10:  id && mode === 10,
      eq_IE11:  id && mode === 11,
      Trident:  id
    }
  }
}
