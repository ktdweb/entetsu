'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _prefixStyle = require('prefix-style');

var _prefixStyle2 = _interopRequireDefault(_prefixStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parallax = function () {
  function Parallax(elements, options) {
    _classCallCheck(this, Parallax);

    this.layers = elements;
    this.options = Object.assign({
      speed: 1
    }, options);

    this.support();
  }

  _createClass(Parallax, [{
    key: 'init',
    value: function init() {
      this.reset();

      // Add listeners
      window.addEventListener('scroll', this.transform.bind(this)); // TODO: Debounce, rAF
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }, {
    key: 'reset',
    value: function reset() {
      // Store window height
      this.viewportHeight = window.innerHeight;

      // Cache initial position of all layers
      this.items = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.layers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var layer = _step.value;

          this.items.push(this.cacheLayerProperties(layer));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.transform();
    }
  }, {
    key: 'support',
    value: function support() {
      this.support.pageOffset = window.pageXOffset !== undefined;
      this.support.getComputedStyle = window.getComputedStyle;
    }
  }, {
    key: 'cacheLayerProperties',
    value: function cacheLayerProperties(element) {
      return {
        element: element,
        top: this.getScrollTop() + this.getElementTop(element) - this.getElementTranslateY(element),
        height: this.getElementHeight(element),
        speed: element.dataset.parallaxSpeed ? element.dataset.parallaxSpeed : this.options.speed
      };
    }
  }, {
    key: 'getElementHeight',
    value: function getElementHeight(element) {
      return element.clientHeight || element.offsetHeight || element.scrollHeight;
    }
  }, {
    key: 'getElementTop',
    value: function getElementTop(element) {
      return element.getBoundingClientRect().top;
    }
  }, {
    key: 'getElementTranslateY',
    value: function getElementTranslateY(element) {
      if (!this.support.getComputedStyle) {
        throw new Error('Your browser needs to support window.getComputedStyle');
      }
      var style = window.getComputedStyle(element);
      var transform = style[(0, _prefixStyle2.default)('transform')];

      var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
      if (matrix3d) {
        return parseFloat(matrix3d[1].split(', ')[13]);
      }
      var matrix = transform.match(/^matrix\((.+)\)$/);
      return matrix ? parseFloat(matrix[1].split(', ')[5]) : 0;
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return Math.max(0, this.support.pageOffset ? window.pageYOffset : document.documentElement.scrollTop || document.body.scrollTop);
    }
  }, {
    key: 'transform',
    value: function transform() {
      var scrollTop = this.getScrollTop();

      for (var i = 0; i < this.items.length; i++) {
        // (∆ / offset) * height
        var progress = (this.items[i].top - scrollTop) / (this.items[i].speed * this.viewportHeight) * this.viewportHeight;

        this.items[i].element.style[(0, _prefixStyle2.default)('transform')] = 'translate3d(0, ' + ~~progress + 'px, 0)';
      }
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.reset();
    }
  }]);

  return Parallax;
}();

exports.default = Parallax;