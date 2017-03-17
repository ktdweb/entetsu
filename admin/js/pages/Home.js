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

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      login: {
        id: {
          val: ''
        },
        pw: {
          val: ''
        }
      }
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'article',
        { id: 'Home' },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: 'Login' }),
        _react2.default.createElement(
          'h1',
          null,
          'ログイン'
        ),
        _react2.default.createElement(
          'div',
          { className: 'login' },
          _react2.default.createElement(
            'label',
            null,
            'ID'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            id: 'loginId',
            name: 'id',
            value: this.state.login.id.val,
            onChange: this.formUpdate.bind(this)
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            null,
            'PW'
          ),
          _react2.default.createElement('input', {
            type: 'password',
            id: 'loginPassword',
            name: 'pw',
            value: this.state.login.pw.val,
            onChange: this.formUpdate.bind(this)
          }),
          _react2.default.createElement('p', { id: 'loginError', className: 'loginError' })
        ),
        _react2.default.createElement(
          'button',
          {
            onClick: this.login.bind(this)
          },
          'ログインする'
        )
      );
    }

    /*
     * submit
     */

  }, {
    key: 'login',
    value: function login(e) {
      e.preventDefault();

      var id = document.getElementById('loginId').value;
      var pw = document.getElementById('loginPassword').value;

      var obj = { id: id, password: pw };

      _MemberActions2.default.login(obj, this.loginCallBack.bind(this));
    }
  }, {
    key: 'loginCallBack',
    value: function loginCallBack(res) {
      var el = document.getElementById('loginError');

      if (res === undefined) {
        el.innerHTML = 'ID、パスワードをご確認ください';
        el.classList.add('active');
        window.login = false;
      } else {
        el.innerHTML = 'ログインに成功しました';
        el.classList.add('active');
        // this.props.changeLoginStatus(res);
        window.login = true;
      }
    }
  }, {
    key: 'formUpdate',
    value: function formUpdate(e) {
      var field = e.target.name;
      var val = e.target.value;

      var login = this.state.login;

      if (login[field].flag) {
        val = '';
        e.target.style.color = 'black';
      }

      login[field] = {
        val: val,
        flag: false
      };

      if (this.txtCount(field, val)) {
        this.setState({
          login: login
        });
      }
    }
  }, {
    key: 'validateId',
    value: function validateId() {
      var vals = this.state.login;
      var el = document.getElementById('loginId');

      if (vals.id.val == '' || vals.id.val == 'IDを入力' || !vals.id.val.match(/^[A-Za-z0-9-_\.]+[\w-]+@[\w\.-]+\.\w{2,}$/)) {
        return this.turnRed(el);
      } else {
        return this.turnGreen(el);
      }
    }
  }, {
    key: 'validatePw',
    value: function validatePw() {
      var vals = this.state.login;
      var el = document.getElementById('loginPassword');

      if (vals.pw.val == '' || vals.pw.val == 'パスワードを入力' || vals.pw.val.match(/[^A-Za-z0-9]+/)) {
        return this.turnRed(el);
      } else {
        return this.turnGreen(el);
      }
    }

    /*
     * エラー時表示処理
     */

  }, {
    key: 'turnRed',
    value: function turnRed(el) {
      el.classList.add('active');;
      return false;
    }
  }, {
    key: 'turnGreen',
    value: function turnGreen(el) {
      el.classList.remove('active');;
      return true;
    }
  }, {
    key: 'txtCount',
    value: function txtCount(field, val) {
      var cnt = void 0;

      switch (field) {
        case 'id':
          cnt = 110;break;
        case 'pw':
          cnt = 16;break;
        default:
          break;
      }

      return val.length <= cnt ? true : false;
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;