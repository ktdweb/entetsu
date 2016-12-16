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
    key: 'handleAlert',
    value: function handleAlert(e) {
      e.preventDefault();

      alert('開発環境では登録できません');
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.works;

      var sections = this.generateSections();

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
                  name: 'section_id',
                  onChange: this.handleText.bind(this),
                  value: data.section_id
                },
                sections
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
              name: 'entry_start',
              className: 'w-s',
              onChange: this.handleText.bind(this),
              value: data.entry_start
            }),
            _react2.default.createElement(
              'label',
              null,
              '終了日時'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'entry_end',
              className: 'w-s',
              onChange: this.handleText.bind(this),
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
              name: 'title',
              value: data.title,
              onChange: this.handleText.bind(this),
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
              name: 'detail',
              className: 'w-xl',
              onChange: this.handleText.bind(this),
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
              name: 'location',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              name: 'time',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              onChange: this.handleText.bind(this),
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
              name: 'wage',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              name: 'days',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              name: 'holidays',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              name: 'part',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              name: 'term',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              name: 'career',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              name: 'selling',
              className: 'w-xl',
              onChange: this.handleText.bind(this),
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
              name: 'cert',
              className: 'w-l',
              onChange: this.handleText.bind(this),
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
              name: 'desc',
              className: 'w-xl',
              onChange: this.handleText.bind(this),
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
                name: 'abbr_wage',
                className: 'w-xs',
                value: data.abbr_wage,
                placeholder: '860',
                onChange: this.handleText.bind(this)
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
                  {
                    name: 'unit_wage',
                    onChange: this.handleText.bind(this),
                    value: data.unit_wage
                  },
                  _react2.default.createElement(
                    'option',
                    { value: '1' },
                    '時給'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '2' },
                    '日給'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '3' },
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
              name: 'abbr_time',
              className: 'w-s',
              value: data.abbr_time,
              placeholder: '09:00~17:00',
              onChange: this.handleText.bind(this)
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
              'select',
              {
                name: 'location_id',
                onChange: this.handleText.bind(this),
                value: data.location_id
              },
              _react2.default.createElement(
                'option',
                { value: '1' },
                '中区'
              ),
              _react2.default.createElement(
                'option',
                { value: '2' },
                '北区'
              ),
              _react2.default.createElement(
                'option',
                { value: '3' },
                '東区'
              ),
              _react2.default.createElement(
                'option',
                { value: '4' },
                '西区'
              ),
              _react2.default.createElement(
                'option',
                { value: '5' },
                '南区'
              ),
              _react2.default.createElement(
                'option',
                { value: '6' },
                '浜北区'
              ),
              _react2.default.createElement(
                'option',
                { value: '7' },
                '天竜区'
              ),
              _react2.default.createElement(
                'option',
                { value: '8' },
                'その他'
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
            '時間で選ぶ'
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'select',
              {
                name: 'time_id',
                onChange: this.handleText.bind(this),
                value: data.time_id
              },
              _react2.default.createElement(
                'option',
                { value: '1' },
                'フルタイム'
              ),
              _react2.default.createElement(
                'option',
                { value: '2' },
                '短時間'
              ),
              _react2.default.createElement(
                'option',
                { value: '3' },
                '短期'
              ),
              _react2.default.createElement(
                'option',
                { value: '4' },
                '午前中'
              ),
              _react2.default.createElement(
                'option',
                { value: '5' },
                '午後'
              ),
              _react2.default.createElement(
                'option',
                { value: '6' },
                '夕方'
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
            '業種で選ぶ'
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
                '清掃職'
              ),
              _react2.default.createElement(
                'option',
                { value: '2' },
                'ドライバー'
              ),
              _react2.default.createElement(
                'option',
                { value: '3' },
                'ビル管理スタッフ'
              ),
              _react2.default.createElement(
                'option',
                { value: '4' },
                '営業・事務職'
              ),
              _react2.default.createElement(
                'option',
                { value: '5' },
                '食品検査技師'
              ),
              _react2.default.createElement(
                'option',
                { value: '6' },
                '新卒'
              ),
              _react2.default.createElement(
                'option',
                { value: '7' },
                'その他'
              )
            )
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
              name: 'time_start',
              className: 'w-s',
              value: data.time_start,
              onChange: this.handleText.bind(this)
            }),
            _react2.default.createElement(
              'label',
              null,
              '終了時間'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'time_end',
              className: 'w-s',
              value: data.time_end,
              onChange: this.handleText.bind(this)
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
              {
                onClick: this.handleAlert.bind(this),
                className: 'formFile' },
              'アップロード',
              _react2.default.createElement('input', { type: 'file' })
            )
          )
        ),
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
    key: 'handleChange',
    value: function handleChange(e) {}
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      _WorkActions2.default.adminUpdate(this.state.works);
      window.location.href = '/admin/works/';
    }
  }, {
    key: 'updateState',
    value: function updateState() {
      var res = _WorkStore2.default.read();
      this.setState({ works: res[0], tags: res.tags });
    }
  }, {
    key: 'handleSections',
    value: function handleSections(e) {
      this.setState({ works: { section_id: e.target.value } });
    }
  }, {
    key: 'handleText',
    value: function handleText(e) {
      var field = e.target.getAttribute('name');
      var obj = this.state.works;
      obj[field] = e.target.value;
      this.setState({ works: obj });
    }
  }, {
    key: 'generateSections',
    value: function generateSections() {
      var arr = ['清掃', 'ビル', 'マンション', '運行', '指定管理', 'ベンリ-', '食品', '総務'];

      return Object.keys(arr).map(function (i) {
        return _react2.default.createElement(
          'option',
          {
            key: 'section' + i,
            value: parseInt(i) + 1
          },
          arr[i]
        );
      });
    }
  }]);

  return WorksDetail;
}(_react2.default.Component);

exports.default = WorksDetail;