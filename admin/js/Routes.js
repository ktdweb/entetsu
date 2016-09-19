'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Default = require('./layouts/Default');

var _Default2 = _interopRequireDefault(_Default);

var _Header = require('./layouts/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('./layouts/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Home = require('./pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Topics = require('./pages/Topics');

var _Topics2 = _interopRequireDefault(_Topics);

var _Works = require('./pages/Works');

var _Works2 = _interopRequireDefault(_Works);

var _WorksDetail = require('./pages/WorksDetail');

var _WorksDetail2 = _interopRequireDefault(_WorksDetail);

var _Members = require('./pages/Members');

var _Members2 = _interopRequireDefault(_Members);

var _MembersDetail = require('./pages/MembersDetail');

var _MembersDetail2 = _interopRequireDefault(_MembersDetail);

var _NoMatch = require('./pages/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = {
  documentRoot: '/admin',
  login: {
    status: false,
    name: ''
  }
};

// layouts


// pages


var routes = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    {
      global: root,
      component: _Default2.default
    },
    _react2.default.createElement(_reactRouter.Route, { path: root.documentRoot + '/',
      global: root,
      components: {
        header: _Header2.default,
        nav: _Nav2.default,
        main: _Topics2.default
      } }),
    _react2.default.createElement(_reactRouter.Route, { path: root.documentRoot + '/works/detail/:id',
      global: root,
      components: {
        header: _Header2.default,
        nav: _Nav2.default,
        main: _WorksDetail2.default
      } }),
    _react2.default.createElement(_reactRouter.Route, { path: root.documentRoot + '/works',
      global: root,
      components: {
        header: _Header2.default,
        nav: _Nav2.default,
        main: _Works2.default
      } }),
    _react2.default.createElement(_reactRouter.Route, { path: root.documentRoot + '/members/detail/:id',
      global: root,
      components: {
        header: _Header2.default,
        nav: _Nav2.default,
        main: _MembersDetail2.default
      } }),
    _react2.default.createElement(_reactRouter.Route, { path: root.documentRoot + '/members',
      global: root,
      components: {
        header: _Header2.default,
        nav: _Nav2.default,
        main: _Members2.default
      } })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: '*', components: _NoMatch2.default, global: root })
);

module.exports = routes;