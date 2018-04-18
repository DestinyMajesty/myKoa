webpackJsonp([3],{

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(548);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(34);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(58);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(224);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = __webpack_require__(226);

var Task = (_dec = (0, _mobxReact.inject)("taskStore"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(Task, _React$Component);

    function Task(props) {
        (0, _classCallCheck3.default)(this, Task);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Task.__proto__ || (0, _getPrototypeOf2.default)(Task)).call(this, props));

        console.log("taskStore->>", _this.props.taskStore);
        return _this;
    }

    (0, _createClass3.default)(Task, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.taskStore.loadTaskList();
        }
    }, {
        key: 'render',
        value: function render() {
            var taskList = this.props.taskStore.taskList;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    taskList.map(function (item) {
                        return _react2.default.createElement(
                            'li',
                            { key: item.toString() },
                            item
                        );
                    })
                )
            );
        }
    }]);
    return Task;
}(_react2.default.Component)) || _class) || _class);
exports.default = Task;

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(549), __esModule: true };

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(550);
module.exports = __webpack_require__(9).Object.getPrototypeOf;


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(132);
var $getPrototypeOf = __webpack_require__(222);

__webpack_require__(221)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ })

});
//# sourceMappingURL=chunk.3.3_697dac1.js.map