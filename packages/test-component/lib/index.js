"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Store =
/*#__PURE__*/
function () {
  function Store() {
    var _this = this;

    _classCallCheck(this, Store);

    _defineProperty(this, "_number", 0);

    _defineProperty(this, "increment", function () {
      _this._number++;
    });
  }

  _createClass(Store, [{
    key: "number",
    get: function get() {
      return String(this._number);
    }
  }]);

  return Store;
}();

console.log('AHA', _mobx.observable, _mobx.action, _mobx.computed);
(0, _mobx.decorate)(Store, {
  _number: _mobx.observable,
  increment: _mobx.action,
  number: _mobx.computed
});

var TestComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TestComponent, _React$Component);

  function TestComponent() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, TestComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TestComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "store", new Store());

    return _this2;
  }

  _createClass(TestComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ClickableComponent = _this$props.clickableComponent,
          NumberElement = _this$props.numberElement;
      var _this$store = this.store,
          number = _this$store.number,
          increment = _this$store.increment;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(ClickableComponent, {
        onClick: increment
      }, "Incremenet"), _react.default.createElement(NumberElement, null, number));
    }
  }]);

  return TestComponent;
}(_react.default.Component);

_defineProperty(TestComponent, "defaultProps", {
  clickableComponent: 'button',
  numberElement: 'div'
});

var _default = (0, _mobxReact.observer)(TestComponent);

exports.default = _default;