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

var _MemberStore = require('../../../js/stores/MemberStore');

var _MemberStore2 = _interopRequireDefault(_MemberStore);

var _MemberActions = require('../../../js/actions/MemberActions');

var _MemberActions2 = _interopRequireDefault(_MemberActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Members = function (_React$Component) {
  _inherits(Members, _React$Component);

  function Members(props) {
    _classCallCheck(this, Members);

    var _this = _possibleConstructorReturn(this, (Members.__proto__ || Object.getPrototypeOf(Members)).call(this, props));

    var members = _MemberStore2.default.read();
    _this.state = {
      members: members
    };
    return _this;
  }

  _createClass(Members, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _MemberStore2.default.subscribe(this.updateState.bind(this));
      _MemberActions2.default.create();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _MemberStore2.default.destroy(this.updateState.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var eachMember = void 0;
      if (this.state.members.length > 0) {
        eachMember = Object.keys(this.state.members).map(function (i) {
          return _react2.default.createElement(EachMember, { key: i, data: _this2.state.members[i] });
        });
      }

      return _react2.default.createElement(
        'article',
        { id: 'Members' },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: '会員情報' }),
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement('i', { className: 'fa fa-bell-o' }),
          '会員情報'
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
                '名前'
              ),
              _react2.default.createElement(
                'th',
                null,
                'フリガナ'
              ),
              _react2.default.createElement(
                'th',
                null,
                'メールアドレス'
              ),
              _react2.default.createElement(
                'th',
                null,
                '詳細情報'
              ),
              _react2.default.createElement(
                'th',
                null,
                '更新日'
              )
            ),
            eachMember
          )
        )
      );
    }
  }, {
    key: 'updateState',
    value: function updateState() {
      var res = _MemberStore2.default.read();
      this.setState({ members: res });
    }
  }]);

  return Members;
}(_react2.default.Component);

exports.default = Members;

var EachMember = function (_React$Component2) {
  _inherits(EachMember, _React$Component2);

  function EachMember(props) {
    _classCallCheck(this, EachMember);

    return _possibleConstructorReturn(this, (EachMember.__proto__ || Object.getPrototypeOf(EachMember)).call(this, props));
  }

  _createClass(EachMember, [{
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
              to: '/admin/members/detail/' + data.id
            },
            data.name
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          data.furi
        ),
        _react2.default.createElement(
          'td',
          null,
          data.mail
        ),
        _react2.default.createElement(
          'td',
          null,
          this.changeFlag(data.detail_flag)
        ),
        _react2.default.createElement(
          'td',
          null,
          data.created
        )
      );
    }
  }, {
    key: 'changeFlag',
    value: function changeFlag(val) {
      var res = void 0;
      if (val == 1) {
        res = 'あり';
      } else {
        res = 'なし';
      }

      return res;
    }
  }]);

  return EachMember;
}(_react2.default.Component);