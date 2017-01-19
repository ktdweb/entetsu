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

var _CommonStore = require('../../../js/stores/CommonStore');

var _CommonStore2 = _interopRequireDefault(_CommonStore);

var _CommonActions = require('../../../js/actions/CommonActions');

var _CommonActions2 = _interopRequireDefault(_CommonActions);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// jsを詠込むためsrc, admin共にgulpしないと反映不可


var WorksDetail = function (_React$Component) {
  _inherits(WorksDetail, _React$Component);

  function WorksDetail(props) {
    _classCallCheck(this, WorksDetail);

    var _this = _possibleConstructorReturn(this, (WorksDetail.__proto__ || Object.getPrototypeOf(WorksDetail)).call(this, props));

    var works = _WorkStore2.default.read();
    _this.state = {
      works: works[0],
      commons: {
        'categories': [],
        'groups': [],
        'sections': []
      }
    };
    return _this;
  }

  _createClass(WorksDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _WorkStore2.default.subscribe(this.updateState.bind(this));
      if (this.props.params.id != 0) {
        _WorkActions2.default.adminEach(this.props.params.id);
      }

      _CommonStore2.default.subscribe(this.updateCommon.bind(this));
      _CommonActions2.default.get();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _WorkStore2.default.destroy(this.updateState.bind(this));
      _CommonStore2.default.destroy(this.updateState.bind(this));
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
      if (!this.state.commons.categories[1]) return false;

      var data = this.state.works;
      console.log(data);

      var sections = this.generateSelects(this.state.commons.sections, 'sections');

      var wages = this.generateSelects(this.state.commons.wages, 'wages');

      var locations = this.generateCheckbox(this.state.commons.categories[1], 'locations');

      var times = this.generateCheckbox(this.state.commons.categories[2], 'times');

      var categories = this.generateCheckbox(this.state.commons.categories[3], 'categories');

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
            '担当部署',
            _react2.default.createElement(
              'span',
              { className: 'warning' },
              ' ※'
            )
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
            '期間指定',
            _react2.default.createElement(
              'span',
              { className: 'warning' },
              ' ※'
            )
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
              value: data.entry_start,
              'data-type': 'datetime'
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
            }),
            _react2.default.createElement(
              'p',
              { className: 'message' },
              '必須項目です 0000-00-00 00:00:00の書式で入力してください'
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
            }),
            _react2.default.createElement(
              'p',
              { className: 'message' },
              '必須項目です'
            )
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
              value: data.location,
              maxLength: '120'
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
              value: data.break,
              maxLength: '120'
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
              value: data.wage,
              maxLength: '120'
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
              value: data.days,
              maxLength: '120'
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
              value: data.holidays,
              maxLength: '120'
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
              value: data.part,
              maxLength: '120'
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
              value: data.term,
              maxLength: '120'
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
              value: data.career,
              maxLength: '120'
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
              value: data.cert,
              maxLength: '120'
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
            '短縮表示',
            _react2.default.createElement(
              'span',
              { className: 'warning' },
              ' ※'
            )
          ),
          _react2.default.createElement(
            'dd',
            null,
            _react2.default.createElement(
              'div',
              { className: 'abbr' },
              _react2.default.createElement(
                'label',
                null,
                '給与'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                name: 'abbr_wage',
                className: 'w-s',
                value: data.abbr_wage,
                placeholder: '860',
                onChange: this.handleText.bind(this),
                maxLength: '8',
                'data-type': 'int',
                required: true
              }),
              _react2.default.createElement(
                'small',
                null,
                '円'
              ),
              _react2.default.createElement(
                'p',
                { className: 'message' },
                '必須項目です 半角数字で入力してください'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'abbr' },
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
                    name: 'unit_wage_id',
                    onChange: this.handleText.bind(this),
                    value: data.unit_wage_id
                  },
                  wages
                )
              )
            ),
            _react2.default.createElement(
              'div',
              null,
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
                onChange: this.handleText.bind(this),
                maxLength: '12',
                required: true
              }),
              _react2.default.createElement(
                'p',
                { className: 'message' },
                '必須項目です'
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
            '場所で選ぶ'
          ),
          _react2.default.createElement(
            'dd',
            null,
            locations
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
            times
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
            categories
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            'スライダー検索用',
            _react2.default.createElement(
              'span',
              { className: 'warning' },
              ' ※'
            )
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
              onChange: this.handleText.bind(this),
              'data-type': 'time'
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
              onChange: this.handleText.bind(this),
              'data-type': 'time'
            }),
            _react2.default.createElement(
              'p',
              { className: 'message' },
              '必須項目です 00:00:00の書式で入力してください'
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
      var keys = ['locations', 'times', 'categories'];

      var tags = [];

      Object.keys(keys).map(function (v) {
        var arr = document.getElementsByName(keys[v]);
        Object.keys(arr).map(function (i) {
          if (arr[i].checked == true) {
            tags.push(parseInt(arr[i].value));
          }
        });
      });

      var res = this.state.works;
      res.tags = tags;

      delete res.location_id;
      delete res.time_id;
      delete res.category_id;
      delete res.unit_wage;

      _WorkActions2.default.adminUpdate(res);
      //window.location.href = '/admin/works/';
    }
  }, {
    key: 'updateState',
    value: function updateState() {
      var res = _WorkStore2.default.read();
      this.setState({ works: res[0], tags: res.tags });
    }
  }, {
    key: 'updateCommon',
    value: function updateCommon() {
      var res = _CommonStore2.default.read();
      this.setState({ commons: res });
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

      var obj = this.state.works;
      obj[field] = e.target.value;
      this.setState({ works: obj });
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
      return (0, _moment2.default)(str, 'YYYY-MM-DD HH:mm:ss', true).isValid();
    }
  }, {
    key: 'isValidDateTime',
    value: function isValidDateTime(str) {
      if (str == '0000-00-00 00:00:00') {
        return true;
      }
      return (0, _moment2.default)(str, 'YYYY-MM-DD HH:mm:ss', true).isValid();
    }
  }, {
    key: 'isValidTime',
    value: function isValidTime(str) {
      return (0, _moment2.default)(str, 'HH:mm:ss', true).isValid();
    }
  }, {
    key: 'generateSelects',
    value: function generateSelects(arr, key) {
      return Object.keys(arr).map(function (i) {
        return _react2.default.createElement(
          'option',
          {
            key: key + i,
            value: parseInt(arr[i].id)
          },
          arr[i].name
        );
      });
    }
  }, {
    key: 'generateCheckbox',
    value: function generateCheckbox(arr, key) {
      var _this2 = this;

      return Object.keys(arr).map(function (i) {
        var checked = '';
        Object.keys(_this2.state.tags).map(function (v) {
          if (arr[i].id == _this2.state.tags[v]) {
            checked = 'checked';
          }
        });

        return _react2.default.createElement(
          'label',
          { key: key + i },
          arr[i].name,
          _react2.default.createElement('input', {
            name: key,
            type: 'checkbox',
            value: parseInt(arr[i].id),
            defaultChecked: checked
          })
        );
      });
    }
  }]);

  return WorksDetail;
}(_react2.default.Component);

exports.default = WorksDetail;