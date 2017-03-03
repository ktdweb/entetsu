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

    var topics = _TopicStore2.default.read();
    _this.state = {
      topics: topics
    };
    _this.data = _this.state.topics[0];
    return _this;
  }

  _createClass(TopicsDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _TopicStore2.default.subscribe(this.updateState.bind(this));
      _TopicActions2.default.create();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TopicStore2.default.destroy(this.updateState.bind(this));this;
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.data;

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
              className: 'w-s',
              value: data.term_start
            }),
            _react2.default.createElement(
              'label',
              null,
              '終了日時'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
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
              null,
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
            'タイトル'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              value: 'ホームページが公開されました',
              className: 'w-xl'
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
      var res = _TopicStore2.default.read();
      this.setState({ topics: res });
    }
  }]);

  return TopicsDetail;
}(_react2.default.Component);

exports.default = TopicsDetail;