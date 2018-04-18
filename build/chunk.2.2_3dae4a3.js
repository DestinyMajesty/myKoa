webpackJsonp([2],{

/***/ 545:
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

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function (_Component) {
    (0, _inherits3.default)(Users, _Component);

    function Users(props) {
        (0, _classCallCheck3.default)(this, Users);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Users.__proto__ || (0, _getPrototypeOf2.default)(Users)).call(this, props));

        _this.loadUser = function () {
            apiInfo({
                url: '/api/users/getUser',
                reqData: {
                    cmd: 'queryUserName'
                }
            }).then(function (data) {
                console.log(data);
                _this.setState({
                    name: data.username
                });
            });
        };

        _this.addUser = function (e) {
            e & e.preventDefault();
            apiInfo({
                url: '/api/users/registerUser',
                reqData: {
                    cmd: 'registerUserName',
                    name: _this.state.value.newName
                }
            }).then(function (data) {
                console.log(data);
            });
        };

        _this.handleChange = function (event) {
            _this.setState({
                value: {
                    newName: event.target.value
                }
            });
        };

        _this.state = {
            name: [],
            value: {
                newName: ''
            }
        };
        return _this;
    }

    (0, _createClass3.default)(Users, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                name = _state.name,
                value = _state.value;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u540D\u5B57\uFF1A',
                    name.join(',') || '--'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.loadUser },
                    '\u518D\u70B9\u4ECE\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u540D\u5B57'
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        '\u65B0\u589E\u7684\u540D\u5B57'
                    ),
                    _react2.default.createElement('input', { type: 'text', name: 'firstname', value: value.newName, onChange: this.handleChange }),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.addUser },
                        '\u65B0\u589E'
                    )
                )
            );
        }
    }]);
    return Users;
}(_react.Component);

exports.default = Users;

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
//# sourceMappingURL=chunk.2.2_3dae4a3.js.map