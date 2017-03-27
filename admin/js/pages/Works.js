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

var _WorkStore = require('../../../js/stores/WorkStore');

var _WorkStore2 = _interopRequireDefault(_WorkStore);

var _WorkActions = require('../../../js/actions/WorkActions');

var _WorkActions2 = _interopRequireDefault(_WorkActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Works = function (_React$Component) {
  _inherits(Works, _React$Component);

  function Works(props) {
    _classCallCheck(this, Works);

    var _this = _possibleConstructorReturn(this, (Works.__proto__ || Object.getPrototypeOf(Works)).call(this, props));

    var works = _WorkStore2.default.read();
    _this.state = {
      works: works
    };
    return _this;
  }

  _createClass(Works, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var key = window.sessionStorage.getItem('login');
      if (key != 'added') {
        location.href = '/admin/';
      }
      /*
      if (!window.login) {
        location.href = '/admin/';
      }
      */

      _WorkStore2.default.subscribe(this.updateState.bind(this));
      _WorkActions2.default.adminGet(this.props.params.id);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _WorkStore2.default.destroy(this.updateState.bind(this));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _WorkActions2.default.adminGet(nextProps.params.id);
    }
  }, {
    key: 'handleAlert',
    value: function handleAlert(e) {
      e.preventDefault();

      alert('開発環境では登録できません');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cat = '';
      if (this.props.params.id) {
        cat = '/' + this.props.params.id;
      }

      var eachWork = void 0;
      if (this.state.works.length >= 1) {
        eachWork = Object.keys(this.state.works).map(function (i) {
          return _react2.default.createElement(EachWork, {
            key: i,
            cat: cat,
            data: _this2.state.works[i],
            handleClick: _this2.adminDelete.bind(_this2)
          });
        });
      } else {
        eachWork = _react2.default.createElement(
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

      var mes = '';
      if (this.props.params.update) {
        mes = '求人情報が更新されました';
      }

      return _react2.default.createElement(
        'article',
        { id: 'Works' },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: '求人情報' }),
        _react2.default.createElement(
          _reactRouter.Link,
          {
            to: '/admin/works/detail/0' + cat
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
          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
          '求人情報'
        ),
        _react2.default.createElement(
          'div',
          { className: 'warning' },
          mes
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/0' },
                'すべて'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/1' },
                '清掃'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/2' },
                'ビル'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/3' },
                'マンション'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/4' },
                '運行'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/5' },
                '指定管理'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/6' },
                'ベンリー'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/7' },
                '食品検査'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin/works/8' },
                '総務'
              )
            )
          )
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
                '時間'
              ),
              _react2.default.createElement(
                'th',
                null,
                '給与'
              ),
              _react2.default.createElement(
                'th',
                null,
                '更新日'
              ),
              _react2.default.createElement(
                'th',
                null,
                '-'
              )
            ),
            eachWork
          )
        )
      );
    }
  }, {
    key: 'updateState',
    value: function updateState() {
      var res = _WorkStore2.default.read();
      this.setState({ works: res });
    }
  }, {
    key: 'adminDelete',
    value: function adminDelete(e) {
      e.preventDefault();

      var id = e.target.name;
      var i = 'ID: ' + id + ' ';
      var res = confirm(i + 'を本当に削除しますか?');
      if (res) {
        _WorkActions2.default.adminDelete(id);
      } else {
        return false;
      }
    }
  }]);

  return Works;
}(_react2.default.Component);

exports.default = Works;

var EachWork = function (_React$Component2) {
  _inherits(EachWork, _React$Component2);

  function EachWork(props) {
    _classCallCheck(this, EachWork);

    return _possibleConstructorReturn(this, (EachWork.__proto__ || Object.getPrototypeOf(EachWork)).call(this, props));
  }

  _createClass(EachWork, [{
    key: 'render',
    value: function render() {
      var cat = '';
      if (this.props.cat) {
        cat = this.props.cat;
      }

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
              to: '/admin/works/detail/' + data.id + cat
            },
            data.title
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          data.abbr_time
        ),
        _react2.default.createElement(
          'td',
          null,
          data.unit_wage + data.abbr_wage + '円'
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

  return EachWork;
}(_react2.default.Component);