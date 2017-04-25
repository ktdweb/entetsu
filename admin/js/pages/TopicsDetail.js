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

var TopicsDetail = function (_React$Component) {
  _inherits(TopicsDetail, _React$Component);

  function TopicsDetail(props) {
    _classCallCheck(this, TopicsDetail);

    var _this = _possibleConstructorReturn(this, (TopicsDetail.__proto__ || Object.getPrototypeOf(TopicsDetail)).call(this, props));

    var topics = {
      id: '',
      category_id: 1,
      title: '',
      desc: '',
      term_start: '0000-00-00 00:00:00',
      term_end: '0000-00-00 00:00:00',

      created: '',
      modified: ''
    };

    _this.state = {
      topics: topics
    };
    return _this;
  }

  _createClass(TopicsDetail, [{
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

      _TopicStore2.default.subscribe(this.updateState.bind(this));
      if (this.props.params.id != 0) {
        _TopicActions2.default.adminGet(this.props.params.id);
      } else {
        _TopicActions2.default.defaults();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TopicStore2.default.destroy(this.updateState.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.topics;

      for (var i = 0; i < this.state.topics.length; i++) {
        if (this.state.topics[i].id == this.props.params.id) {
          data = this.state.topics[i];
        }
      }

      return _react2.default.createElement(
        'article',
        { id: 'TopicsDetail' },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: '新着情報' }),
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement('i', { className: 'fa fa-check-square-o' }),
          '新着情報'
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '期間指定'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'label',
              null,
              '開始日時'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'term_start',
              className: 'w-s',
              onChange: this.handleText.bind(this),
              value: data.term_start
            }),
            _react2.default.createElement(
              'label',
              null,
              '終了日時'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'term_end',
              className: 'w-s',
              onChange: this.handleText.bind(this),
              value: data.term_end
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
            'カテゴリ'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'select',
              {
                name: 'category_id',
                onChange: this.handleText.bind(this),
                value: data.category_id
              },
              _react2.default.createElement(
                'option',
                { value: '1' },
                '一般'
              ),
              _react2.default.createElement(
                'option',
                { value: '2' },
                'お仕事を探す'
              )
            )
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            'タイトル',
            _react2.default.createElement(
              'span',
              { className: 'warning' },
              ' ※'
            )
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              name: 'title',
              value: data.title,
              onChange: this.handleText.bind(this),
              className: 'w-xl',
              maxLength: '120',
              required: true
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '備考'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('textarea', {
              name: 'desc',
              className: 'w-xl',
              onChange: this.handleText.bind(this),
              value: data.desc
            })
          )
        ),
        _react2.default.createElement('p', { id: 'message', className: 'color-brand-danger' }),
        _react2.default.createElement(
          'button',
          {
            className: 'w-s',
            onClick: this.handleSubmit.bind(this)
          },
          '更新'
        )
      );
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var res = this.state.topics;

      var valid = true;
      var el = document.getElementById('message');

      if (res.title == '') {
        txt = 'タイトルを入力してください';
        el.innerHTML = txt;
        valid = false;
      }

      if (res.entry_start == '' || res.entry_end == '') {
        txt = '期間指定が入力されていません。指定しない場合は[0000-00-00 00:00:00]を入力してください';
        el.innerHTML = txt;
        valid = false;
      }

      if (valid) {
        el.innerHTML = '';
        if (this.props.params.id == 0) {
          _TopicActions2.default.adminInsert(res, this.toIndex.bind(this));
        } else {
          console.log(res);
          _TopicActions2.default.adminUpdate(res, this.toIndex.bind(this));
        }
      }
    }
  }, {
    key: 'toIndex',
    value: function toIndex() {
      // window.location.href = '/admin/topics/';
    }
  }, {
    key: 'handleText',
    value: function handleText(e) {
      var field = e.target.getAttribute('name');
      var req = e.target.required;
      var value = e.target.value;
      var type = e.target.getAttribute('data-type');
      var mes = e.target.parentNode.querySelector('p.message');

      var isValid = true;
      if (req && !this.isValidRequired(value)) {
        isValid = false;
      }
      if (type == 'int' && !this.isValidInt(value)) {
        isValid = false;
      }
      if (type == 'time' && !this.isValidTime(value)) {
        isValid = false;
      }
      if (type == 'datetime' && !this.isValidDateTime(value)) {
        isValid = false;
      }

      if (!isValid) {
        e.target.style.borderColor = '#D9534F';
        if (mes) mes.classList.add('show');
      } else {
        e.target.style.borderColor = '#CDCDCD';
        if (mes) mes.classList.remove('show');
      }

      var obj = this.state.topics;
      obj[field] = e.target.value;
      this.setState({ topics: obj });
    }
  }, {
    key: 'isValidRequired',
    value: function isValidRequired(str) {
      return str.length > 0 ? true : false;
    }
  }, {
    key: 'isValidInt',
    value: function isValidInt(str) {
      return isFinite(str);
    }
  }, {
    key: 'isValidDateTime',
    value: function isValidDateTime(str) {
      if (str == '0000-00-00 00:00:00') {
        return true;
      }
      return m(str, 'YYYY-MM-DD HH:mm:ss', true).isValid();
    }
  }, {
    key: 'isValidDateTime',
    value: function isValidDateTime(str) {
      if (str == '0000-00-00 00:00:00') {
        return true;
      }
      return m(str, 'YYYY-MM-DD HH:mm:ss', true).isValid();
    }
  }, {
    key: 'isValidTime',
    value: function isValidTime(str) {
      return m(str, 'HH:mm:ss', true).isValid();
    }
  }, {
    key: 'updateState',
    value: function updateState() {
      var res = _TopicStore2.default.read();
      this.setState({ topics: res[0] });
    }
  }]);

  return TopicsDetail;
}(_react2.default.Component);

exports.default = TopicsDetail;