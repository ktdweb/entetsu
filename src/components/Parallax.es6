/*
 * - パララックススクロールクラス
 * パララックススクロール効果をつける
 *
 * 使用例 (react.js)
 * cssは特に指定する必要はない
 * ただし画像はabsoluteで配置する
 * cssのクラスはlayerを指定する
 * data-depthは0は動かさない
 * 数字が大きくなるほど移動量大
 *
 * import Parallax from 'components/Parallax'
 *
 * DOMを読み込んだ後にstartするためdidMountで実行
 * componentDidMount() {
 *   this.parallax = new Parallax();
 *   this.parallax.start();
 * }
 *
 * componentWillUnmount() {
 *   this.parallax.destroy();
 * }
 *
 * <div
 *   id="plx01"
 *   className="layer"
 *   data-depth="2">
 *   <img
 *     src="bg_building.jpg"
 *     width="100%"
 *     alt="img"
 *     />
 * </div>
 *
 * @class Parallax
 * @constructor
 */

/*
 * 実行中かどうかのフラグ
 * onScroll()で使用
 *
 * @property tick
 * @public
 * @type {Boolean}
 * @default false
 */
let tick  = false;

/*
 * requestAnimationFrameの返り値
 * cancelAnimationFrameで使用
 *
 * @property raf
 * @public
 * @type {Number}
 * @default 0
 */
let raf = 0;

/*
 * IE11以下であるかを判定
 * onScrollで使用
 *
 * @property uaIE
 * @public
 * @type {String}
 * @default undefined
 */
let uaIE = undefined;

export default class Parallax {
  
  constructor(className = 'layer') {
    window.requestAnimationFrame = this.setPrefixRaf();
    window.cancelAnimationFrame = this.setPrefixCaf();
    this.className = className;
  }

  /*
   * パララックスをスタート
   *
   * @method start
   * @public
   * @return void
   */
  start() {
    this.init();
    uaIE = document.documentMode;

    window.addEventListener(
      'scroll',
      this.onScroll.bind(this),
      false
    );
  }

  /*
   * パララックスを終了
   * rafと止め、eventListenerを削除
   *
   * @method destroy
   * @public
   * @return void
   */
  destroy() {
    window.cancelAnimationFrame(raf);

    window.removeEventListener(
        'scroll',
        this.onScroll.bind(this),
        false
    );
  }

  /*
   * 変数に値をセット
   * layersはタグ
   * depthsはタグのdata-depthの値
   * topsはcssで設定されたtopの値
   * layersのタグは強制的にabsoluteとなる
   *
   * @method init
   * @public
   * @return void
   */
  init() {
    this.layers = Array();
    this.tops = Array();
    this.depths = Array();

    this.layers = document.getElementsByClassName(
      this.className
    );

    for (let i = 0; i < this.layers.length; i++) {
      let dep = this.layers[i].getAttribute('data-depth');
      this.layers[i].style.position = 'absolute';
      this.depths[i] = dep;
      this.tops[i] = this.layers[i].offsetTop;
    }
  }

  /*
   * 移動させる
   * onScrollから使用
   *
   * @method update
   * @public
   * @return void
   */
  update() {
    let y = window.pageYOffset;
    let val;
    for (let i = 0; i < this.layers.length; i++) {
      // 移動量
      if (this.depths[i] != 0) {
        val = this.tops[i] + y / (this.depths[i] * 4);
        this.layers[i].style.top = val  + 'px';
      }
    }
    tick = false;
  };

  /*
   * スクロールにあわせupdateを実行
   * eventHandlerから使用
   *
   * @method onScroll
   * @public
   * @return void
   */
  onScroll(e) {
    if (!tick && uaIE == undefined) {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(
        this.update.bind(this)
      );
      tick = true;
    }
  }

  /*
   * requestAnimationFrameにprefix
   *
   * @method setPrefixRaf
   * @public
   * @return void
   */
  setPrefixRaf() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame;
  }

  /*
   * cancelAnimationFrameにprefix
   *
   * @method setPrefixCaf
   * @public
   * @return void
   */
  setPrefixCaf() {
    return  window.cancelAnimationFrame       ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame    ||
            window.msCancelAnimationFrame;
  }
}
