'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topics = function (_React$Component) {
  _inherits(Topics, _React$Component);

  function Topics(props) {
    _classCallCheck(this, Topics);

    return _possibleConstructorReturn(this, (Topics.__proto__ || Object.getPrototypeOf(Topics)).call(this, props));
  }

  _createClass(Topics, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'article',
        { id: 'Topics' },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: '新着情報' }),
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement('i', { className: 'fa fa-check-square-o' }),
          '新着情報'
        ),
        _react2.default.createElement(
          'table',
          { className: 'sheet' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'ID'
              ),
              _react2.default.createElement(
                'th',
                null,
                'タイトル'
              ),
              _react2.default.createElement(
                'th',
                null,
                '内容'
              ),
              _react2.default.createElement(
                'th',
                null,
                '作成日'
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                '1'
              ),
              _react2.default.createElement(
                'td',
                null,
                'ホームページが公開されました'
              ),
              _react2.default.createElement(
                'td',
                null,
                '内容'
              ),
              _react2.default.createElement(
                'td',
                null,
                '2016-06-30 12:00:00'
              )
            )
          )
        )
      );
    }
  }]);

  return Topics;
}(_react2.default.Component);

exports.default = Topics;