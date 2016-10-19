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

var MembersDetail = function (_React$Component) {
  _inherits(MembersDetail, _React$Component);

  function MembersDetail(props) {
    _classCallCheck(this, MembersDetail);

    var _this = _possibleConstructorReturn(this, (MembersDetail.__proto__ || Object.getPrototypeOf(MembersDetail)).call(this, props));

    var members = _MemberStore2.default.read();
    _this.state = {
      members: members
    };
    return _this;
  }

  _createClass(MembersDetail, [{
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
      var data = this.state.members[0];

      for (var i = 0; i < this.state.members.length; i++) {
        if (this.state.members[i].id == this.props.params.id) {
          data = this.state.members[i];
        }
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
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '名前'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              value: data.name,
              className: 'w-s'
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            'フリガナ'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
              value: data.furi
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '電話番号'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
              value: data.tel
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            'メールアドレス'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-m',
              value: data.mail
            })
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            'パスワード'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-m',
              value: data.password
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '性別'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'label',
              null,
              '男性'
            ),
            _react2.default.createElement('input', {
              type: 'radio',
              name: 'gender_id',
              value: data.gender_id
            }),
            _react2.default.createElement(
              'label',
              null,
              '女性'
            ),
            _react2.default.createElement('input', {
              type: 'radio',
              name: 'gender_id',
              value: data.gender_id
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '年齢'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-xs',
              value: data.age
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '誕生日'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
              value: data.birthday
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '郵便番号'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
              value: data.zip
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '都道府県'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
              value: data.prefecture
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '市区町村'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
              value: data.city
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '住所'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('textarea', {
              type: 'text',
              className: 'w-xl',
              value: data.address
            })
          )
        ),
        _react2.default.createElement(
          'button',
          { className: 'w-s' },
          '更新'
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

  return MembersDetail;
}(_react2.default.Component);

exports.default = MembersDetail;

var EachWork = function (_React$Component2) {
  _inherits(EachWork, _React$Component2);

  function EachWork(props) {
    _classCallCheck(this, EachWork);

    return _possibleConstructorReturn(this, (EachWork.__proto__ || Object.getPrototypeOf(EachWork)).call(this, props));
  }

  _createClass(EachWork, [{
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
          data.title
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
        )
      );
    }
  }]);

  return EachWork;
}(_react2.default.Component);