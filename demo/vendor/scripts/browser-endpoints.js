/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.operator = exports.updateClient = undefined;

	var _request = __webpack_require__(7);

	var _request2 = _interopRequireDefault(_request);

	var _response = __webpack_require__(8);

	var _response2 = _interopRequireDefault(_response);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//general util methods
	var generateEndPoint = function generateEndPoint(method, url) {
	    return(
	        //just keep it simple for now and use dot seperator instead of hashes
	        method + '.' + url
	    );
	};

	//implement custom event emitting and listening
	var subscriptions = {},
	    subscriptionClients = {};

	var subscribe = function subscribe(method, url, execute) {
	    var endpoint = generateEndPoint(method, url);
	    subscriptions[endpoint] = execute;
	};

	var broadcast = function broadcast(method, url, client, params) {
	    var endpoint = generateEndPoint(method, url);
	    subscriptionClients[endpoint] = client;
	    subscriptions[endpoint]((0, _request2.default)(method, url, params), (0, _response2.default)(method, url));
	    client.triggerReadyStateChange(3);
	};

	var updateClient = exports.updateClient = function updateClient(method, url, load) {
	    var endpoint = generateEndPoint(method, url);
	    var client = subscriptionClients[endpoint];
	    client.response = load;
	    client.responseText = load.toString();
	    client.status = 200;
	    client.triggerReadyStateChange(4);
	};

	var operator = {
	    broadcast: broadcast,
	    subscribe: subscribe
	};

	exports.operator = operator;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = browserServer;

	var _operator = __webpack_require__(1);

	var _config = __webpack_require__(3);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function browserServer() {
	    var configSettings = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    configSettings && (0, _config2.default)(configSettings);

	    var api = {};
	    for (var method in registrar) {
	        api[method] = registrar[method];
	    }

	    return api;
	}

	var methods = ['get', 'post', 'put'];
	var registrar = {};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    var _loop = function _loop() {
	        var method = _step.value;

	        registrar[method] = function (capture, execute) {
	            _operator.operator.subscribe(method, capture, execute);
	        };
	    };

	    for (var _iterator = methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        _loop();
	    }
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getConfig = getConfig;
	exports.setConfig = setConfig;
	function getConfig() {
	    return config;
	}
	function setConfig(configSettings) {
	    config = configSettings;
	}

	var config = { identifier: /^\[be\]/, networkDelay: 700 };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _proxyAjax = __webpack_require__(6);

	var _proxyAjax2 = _interopRequireDefault(_proxyAjax);

	var _server = __webpack_require__(2);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(9);
	//const App = true;
	//export default App

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.XMLHttpRequestProxy = undefined;

	var _operator = __webpack_require__(1);

	var _config = __webpack_require__(3);

	//proxy XMLHttpRequest so that it may be extended(without overriding)
	//regular XMLHttpRequests will still function normally
	var XMLHttpRequestProxy = function (proxied) {
	  XMLHttpRequest = function XMLHttpRequest() {
	    var usesExtended = false;
	    var config = (0, _config.getConfig)();
	    //cannot use apply directly since we want a 'new' version
	    var wrapped = new (Function.prototype.bind.apply(proxied, arguments))();

	    (function (proxied) {
	      wrapped.open = function (method, url) {
	        var _this = this;

	        //lets preserve the method, url so we can use them in our extended functionality
	        this.method = method.toLowerCase();
	        this.url = url;

	        //check if its a call to our extended functionality and not just a regular request
	        usesExtended = config.identifier.test(this.url);
	        if (usesExtended) {
	          (function () {
	            var xhttp = _this;
	            //ovverride read-only native properties
	            //only do this if we're sure we are using extended functionality
	            ['responseText', 'response', 'readyState', 'status'].forEach(function (property) {
	              Object.defineProperty(xhttp, property, {
	                writable: true
	              });
	            });

	            _this.triggerReadyStateChange = function (readyState) {
	              _this.readyState = readyState;
	              _this.onreadystatechange();
	            };

	            _this.triggerReadyStateChange(1);
	          })();
	        }

	        return proxied.apply(this, arguments);
	      };
	    })(wrapped.open);

	    (function (proxied) {
	      wrapped.send = function (params) {
	        //check if its a call to our extended functionality and not just a regular request
	        if (usesExtended) {
	          _operator.operator.broadcast(this.method, this.url, this, params);
	          this.triggerReadyStateChange(2);
	        } else {
	          return proxied.apply(this, arguments);
	        }
	      };
	    })(wrapped.send);

	    return wrapped;
	  };
	}(XMLHttpRequest);

	exports.XMLHttpRequestProxy = XMLHttpRequestProxy;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = request;
	function request(method, originalUrl, params) {
	    return {
	        method: method,
	        originalUrl: originalUrl,
	        params: params
	    };
	}
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = response;

	var _operator = __webpack_require__(1);

	function response(method, url) {
	    function send(load) {
	        (0, _operator.updateClient)(method, url, load);
	    }

	    return {
	        send: send
	    };
	}
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["browserServer"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);