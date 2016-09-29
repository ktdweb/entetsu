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

var WorksDetail = function (_React$Component) {
  _inherits(WorksDetail, _React$Component);

  function WorksDetail(props) {
    _classCallCheck(this, WorksDetail);

    var _this = _possibleConstructorReturn(this, (WorksDetail.__proto__ || Object.getPrototypeOf(WorksDetail)).call(this, props));

    var works = _WorkStore2.default.read();
    _this.state = { works: works[0] };
    return _this;
  }

  _createClass(WorksDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _WorkStore2.default.subscribe(this.updateState.bind(this));
      _WorkActions2.default.adminEach(this.props.params.id);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _WorkStore2.default.destroy(this.updateState.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.works;
      var arr = ['清掃', 'ビル', 'マンション', '運行', '指定管理', 'ベンリ-', '食品', '総務'];
      var sectionIds = void 0;
      for (var i = 1; i <= 8; i++) {
        var res;
        if (this.state.works.section_id == i) {
          res = true;
        } else {
          res = false;
        }
        sectionIds = _react2.default.createElement('option', { value: i, key: i
        });
      }

      return _react2.default.createElement(
        'article',
        { id: 'WorksDetail' },
        _react2.default.createElement(_reactDocumentTitle2.default, { title: '求人情報' }),
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement('i', { className: 'fa fa-paperclip' }),
          '求人情報'
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '担当部署'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'label',
              { className: 'formSelect' },
              _react2.default.createElement(
                'select',
                {
                  onChange: this.handleChange.bind(this),
                  value: this.state.works.section_id
                },
                sectionIds
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
              value: data.entry_start
            }),
            _react2.default.createElement(
              'label',
              null,
              '終了日時'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
              value: data.entry_end
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
            'タイトル'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              value: data.title,
              className: 'w-xl'
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '仕事の内容'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('textarea', {
              type: 'text',
              className: 'w-xl',
              value: data.detail
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '勤務地'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.location
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '時間'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.time
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '休憩時間'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.break
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '給与'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.wage
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '日数'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.days
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '休日'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.holidays
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '雇用形態'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.part
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '雇用期間'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.term
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '学歴'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.career
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '職場の雰囲気'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('textarea', {
              className: 'w-xl',
              value: data.selling
            })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '資格'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-l',
              value: data.cert
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
              className: 'w-xl',
              value: data.desc
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
            '短縮表示'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                '給与'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: 'w-xs',
                value: data.abbr_wage,
                placeholder: '860'
              }),
              _react2.default.createElement(
                'small',
                null,
                '円'
              ),
              _react2.default.createElement(
                'label',
                null,
                '単位'
              ),
              _react2.default.createElement(
                'label',
                { className: 'formSelect' },
                _react2.default.createElement(
                  'select',
                  null,
                  _react2.default.createElement(
                    'option',
                    null,
                    '時給'
                  ),
                  _react2.default.createElement(
                    'option',
                    null,
                    '日給'
                  ),
                  _react2.default.createElement(
                    'option',
                    null,
                    '月給'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'label',
              null,
              '時間'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-s',
              value: data.abbr_time,
              placeholder: '09:00~17:00'
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
            '場所で選ぶ'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'label',
              null,
              '中区'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '北区'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '東区'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '西区'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '南区'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'label',
              null,
              '浜北区'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '天竜区'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              'その他'
            ),
            _react2.default.createElement('input', { type: 'checkbox' })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '時間で選ぶ'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'label',
              null,
              'フルタイム'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '短時間'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '短期'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '午前中'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '午後'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '夕方'
            ),
            _react2.default.createElement('input', { type: 'checkbox' })
          )
        ),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            '業種で選ぶ'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'label',
              null,
              '清掃職'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              'ドライバー'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              'ビル管理スタッフ'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              '営業・事務職'
            ),
            _react2.default.createElement('input', { type: 'checkbox' }),
            _react2.default.createElement(
              'label',
              null,
              'その他'
            ),
            _react2.default.createElement('input', { type: 'checkbox' })
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            'スライダー検索用'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'label',
              null,
              '開始時間'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-xs',
              value: data.time_start
            }),
            _react2.default.createElement(
              'label',
              null,
              '終了時間'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              className: 'w-xs',
              value: data.time_end
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
            '画像'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'label',
              { className: 'formFile' },
              'アップロード',
              _react2.default.createElement('input', { type: 'file' })
            )
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
    key: 'handleChange',
    value: function handleChange(e) {}
  }, {
    key: 'updateState',
    value: function updateState() {
      var res = _WorkStore2.default.read();
      this.setState({ works: res[0], tags: res.tags });
    }
  }]);

  return WorksDetail;
}(_react2.default.Component);

exports.default = WorksDetail;