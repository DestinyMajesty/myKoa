webpackJsonp([1],{

/***/ 544:
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

__webpack_require__(567);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
	(0, _inherits3.default)(App, _Component);

	function App() {
		(0, _classCallCheck3.default)(this, App);
		return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
	}

	(0, _createClass3.default)(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'App' },
				_react2.default.createElement(
					'header',
					{ className: 'App-header' },
					_react2.default.createElement('img', { src: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=b2d049778001a18be4e61a1dff466c6d/42166d224f4a20a47f27f39c97529822720ed0b4.jpg', className: 'App-logo', alt: 'logo' })
				),
				_react2.default.createElement(
					'h1',
					{ className: 'App-title' },
					'\u6B22\u8FCE\u6765\u5230\u9093\u8302\u83F2\u7684koa\u4F5C\u54C1'
				),
				_react2.default.createElement('p', { className: 'App-intro' })
			);
		}
	}]);
	return App;
}(_react.Component);

exports.default = App;

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


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(568);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(134)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/less-loader/dist/cjs.js!./home.css", function() {
		var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/less-loader/dist/cjs.js!./home.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 80px;\n}\n.App-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n.App-title {\n  font-size: 1.5em;\n}\n.App-intro {\n  font-size: large;\n}\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=chunk.1.1_061d0fb.js.map