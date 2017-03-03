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

var _TopicStore = require('../../../js/stores/TopicStore');

var _TopicStore2 = _interopRequireDefault(_TopicStore);

var _TopicActions = require('../../../js/actions/TopicActions');

var _TopicActions2 = _interopRequireDefault(_TopicActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topics = function (_React$Component) {
  _inherits(Topics, _React$Component);

  function Topics(props) {
    _classCallCheck(this, Topics);

    var _this = _possibleConstructorReturn(this, (Topics.__proto__ || Object.getPrototypeOf(Topics)).call(this, props));

    var topics = _TopicStore2.default.read();
    _this.state = {
      topics: topics
    };
    _this.data = _this.state.topics[0];
    return _this;
  }

  _createClass(Topics, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _TopicStore2.default.subscribe(this.updateState.bind(this));
      _TopicActions2.default.adminGet();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TopicStore2.default.destroy(this.updateState.bind(this));this;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var eachTopic = void 0;
      if (this.state.topics.length >= 1) {
        eachTopic = Object.keys(this.state.topics).map(function (i) {
          return _react2.default.createElement(EachTopic, {
            key: i,
            data: _this2.state.topics[i],
            handleClick: _this2.adminDelete.bind(_this2)
          });
        });
      } else {
        eachTopic = _react2.default.createElement(
          'tr',
          { className: 'result' },
          _react2.default.createElement(
            'td',
            { colSpan: '6' },
            _react2.default.createElement(
              'div',
              null,
              '登録件数は0件です'
            )
          )
        );
      }

      return _react2.default.createElement(
        'article',
        { id: 'Topics' },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: '新着情報' }),
        _react2.default.createElement(
          _reactRouter.Link,
          {
            to: '/admin/topics/detail/0'
          },
          _react2.default.createElement(
            'button',
            { className: 'headerButton' },
            '新規追加',
            _react2.default.createElement('i', { className: 'fa fa-plus-circle' })
          )
        ),
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
                '作成日'
              ),
              _react2.default.createElement(
                'th',
                null,
                '-'
              )
            ),
            eachTopic
          )
        )
      );
    }
  }, {
    key: 'updateState',
    value: function updateState() {
      var res = _TopicStore2.default.read();
      console.log(res);
      this.setState({ topics: res });
    }
  }, {
    key: 'adminDelete',
    value: function adminDelete(e) {
      e.preventDefault();

      var id = e.target.name;
      var i = 'ID: ' + id + ' ';
      var res = confirm(i + 'を本当に削除しますか?');
      if (res) {
        _TopicActions2.default.adminDelete(id);
      } else {
        return false;
      }
    }
  }]);

  return Topics;
}(_react2.default.Component);

exports.default = Topics;

var EachTopic = function (_React$Component2) {
  _inherits(EachTopic, _React$Component2);

  function EachTopic(props) {
    _classCallCheck(this, EachTopic);

    return _possibleConstructorReturn(this, (EachTopic.__proto__ || Object.getPrototypeOf(EachTopic)).call(this, props));
  }

  _createClass(EachTopic, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          data.id
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            {
              to: '/admin/topics/detail/' + data.id
            },
            data.title
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          data.modified
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'button',
            {
              name: data.id,
              onClick: this.props.handleClick.bind(this)
            },
            '削除'
          )
        )
      );
    }
  }]);

  return EachTopic;
}(_react2.default.Component);