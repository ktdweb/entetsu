'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
  }

  _createClass(Nav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleChange(), false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleChange(), false);
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      var el = document.getElementById('Nav');
      var header = document.getElementById('Header');
      var cli = document.documentElement.clientHeight;

      el.style.height = cli - header.offsetHeight + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var root = this.props.route.global.documentRoot;

      return _react2.default.createElement(
        'aside',
        { id: 'Nav' },
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('i', { className: 'fa fa-check-square-o' }),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: root + '/topics' },
                '新着情報'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: root + '/works/0' },
                '求人情報'
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react2.default.Component);

exports.default = Nav;