'use strict';

var _addons = require('react/addons');

var _addons2 = _interopRequireDefault(_addons);

var _Hello = require('../sample/js/Hello');

var _Hello2 = _interopRequireDefault(_Hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestUtils = _addons2.default.addons.TestUtils;

describe("Hello World", function () {
  it("should render the component", function () {

    var hello = TestUtils.renderIntoDocument(_addons2.default.createElement(_Hello2.default, null));

    var content = _addons2.default.findDOMNode(hello).textContent;

    expect(content).toContain("Hello World");
  });
});