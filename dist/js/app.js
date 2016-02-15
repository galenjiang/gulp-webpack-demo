/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _util = __webpack_require__(1);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_util2.default.ready(function () {
	  alert(2);
	}); //
	// require("../css/app.scss");
	// require.ensure([], function(require) {
	//   var a = require("./core/a").a;
	//   a()
	// });
	//
	// require.ensure([], function(require) {
	//   var b = require("./core/b").b;
	//   b()
	//
	// });

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function Util() {
	  this.mod = {};
	}
	
	//options url data type timeout success error
	Util.prototype.ajax = function (_ref) {
	  var _ref$url = _ref.url;
	  var url = _ref$url === undefined ? "" : _ref$url;
	  var _ref$data = _ref.data;
	  var data = _ref$data === undefined ? {} : _ref$data;
	  var _ref$type = _ref.type;
	  var type = _ref$type === undefined ? "get" : _ref$type;
	  var _ref$timeout = _ref.timeout;
	  var timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
	  var _ref$dataType = _ref.dataType;
	  var dataType = _ref$dataType === undefined ? "string" : _ref$dataType;
	
	  if (!url) {
	    throw new Error("the parameter, url is not exist");
	  }
	
	  var arr = [];
	  data.t = Math.random();
	  for (var name in data) {
	    arr.push(name + "=" + encodeURIComponent(data[name]));
	  }
	  var str = arr.join("&");
	
	  //1 创建
	  if (window.XMLHttpRequest) {
	    var _xhr = new XMLHttpRequest();
	  } else {
	    var _xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	
	  //2 连接
	  //3 发送
	  if (type == "get") {
	    xhr.open("get", url + "?" + str, true);
	    xhr.send();
	  } else {
	    xhr.open("post", url, true);
	    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	    xhr.send(str);
	  }
	
	  //4 接收
	  xhr.onreadystatechange = function () {
	
	    if (xhr.readyState == 4) {
	      //完成
	      clearTimeout(timer);
	      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
	        //成功
	        if (dataType === "json") {
	          var _oJson = JSON.parse(xhr.responseText);
	          success && success(_oJson);
	        } else if (dataType === "string") {
	          success && success(oJson);
	        } else {
	          throw new Error("can not deal with datatype:" + dataType);
	        }
	      } else {
	        //失败
	        error && error(xhr.status);
	      }
	    }
	  };
	
	  //超时
	  if (timeout) {
	    var timer = setTimeout(function () {
	      xhr.abort();
	    }, timeout);
	  }
	};
	// 加载
	Util.prototype.ready = function (fn) {
	  if (document.readyState != 'loading') {
	    fn();
	  } else {
	    document.addEventListener('DOMContentLoaded', fn);
	  }
	};
	// reload images
	Util.prototype.imgPreload = function (arr) {
	  arr.forEach(function (el) {
	    console.log(el);
	    var oImg = document.createElement("img");
	    oImg.src = el;
	  });
	};
	// 富媒体阻止滚动
	Util.prototype.preventMediaDefault = function () {
	  document.addEventListener('touchmove', function (e) {
	    e.preventDefault();
	  }, false);
	};
	// 设置cookie
	Util.prototype.setCookie = function (name, value, expires, path, domain, secure) {
	  var today = new Date();
	  today.setTime(today.getTime());
	  if (expires) {
	    expires = expires * 1000 * 60 * 60 * 24;
	  }
	  var expires_date = new Date(today.getTime() + expires);
	  document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + expires_date.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
	};
	// 删除cookie
	Util.prototype.deleteCookie = function (name, path, domain) {
	  if (this.getCookie(name)) {
	    document.cookie = name + '=' + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
	  }
	};
	// 设置localstorage
	Util.prototype.setStorage = function (name, value) {
	  localStorage.setItem(name, value);
	};
	// 获取localstorage
	Util.prototype.getStorage = function (name) {
	  return localStorage.getItem(name);
	};
	// 删除localstorage
	Util.prototype.deleteStorage = function (name) {
	  localStorage.removeItem(name);
	};
	// 删除所有localstorage
	Util.prototype.deleteAllStorage = function () {
	  localStorage.clear();
	};
	var util = new Util();
	
	exports.default = util;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map