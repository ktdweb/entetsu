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

let tick  = false;

let layers = Array();

let tops = Array();

let depths = Array();

let raf = 0;

export default class Parallax {
  
  constructor() {
    window.requestAnimationFrame = this.setPrefixRaf();
    window.cancelAnimationFrame = this.setPrefixCaf();
  }

  start() {
    this.init();

    window.addEventListener(
        'scroll',
        this.onScroll.bind(this),
        false
    );
  }

  destroy() {
    window.removeEventListener(
        'scroll',
        this.onScroll.bind(this),
        false
    );
    window.cancelAnimationFrame(raf);
  }

  init() {
    layers = document.getElementsByClassName('layer');

    for (let i = 0; i < layers.length; i++) {
      let depth = layers[i].getAttribute('data-depth');
      if (depth != 0) {
        layers[i].style.position = 'absolute';
        depths[i] = depth * 4;
        tops[i] = layers[i].offsetTop;
      }
    }
  }

  update() {
    let y = window.pageYOffset;
    for (let i = 0; i < layers.length; i++) {
      layers[i].style.top = tops[i] + y / depths[i] + 'px';
    }
    tick = false;
  };

  onScroll() {
    if (!tick) {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(
        this.update.bind(this)
      );
      tick = true;
    }
  }

  setPrefixRaf() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame;
  }

  setPrefixCaf() {
    return  window.cancelAnimationFrame       ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame    ||
            window.msCancelAnimationFrame;
  }
}
