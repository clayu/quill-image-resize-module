(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ImageResize"] = factory();
	else
		root["ImageResize"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(22);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(76),
    listCacheDelete = __webpack_require__(77),
    listCacheGet = __webpack_require__(78),
    listCacheHas = __webpack_require__(79),
    listCacheSet = __webpack_require__(80);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(8);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16),
    getRawTag = __webpack_require__(65),
    objectToString = __webpack_require__(88);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(74);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModule; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseModule = function BaseModule(resizer) {
    _classCallCheck(this, BaseModule);

    this.onCreate = function () {};

    this.onDestroy = function () {};

    this.onUpdate = function () {};

    this.overlay = resizer.overlay;
    this.cropOverlay = resizer.cropOverlay;
    this.img = resizer.img;
    this.options = resizer.options;
    this.requestUpdate = resizer.onUpdate;

    this.img.style.objectPosition = "-99999px 99999px";
    this.img.style.backgroundImage = "url('" + this.img.src + "')";
    if (this.img.style.backgroundSize == "") {
        this.img.style.backgroundSize = "100%";
    }
}
/*
    requestUpdate (passed in by the library during construction, above) can be used to let the library know that
    you've changed something about the image that would require re-calculating the overlay (and all of its child
    elements)
     For example, if you add a margin to the element, you'll want to call this or else all the controls will be
    misaligned on-screen.
 */

/*
    onCreate will be called when the element is clicked on
     If the module has any user controls, it should create any containers that it'll need here.
    The overlay has absolute positioning, and will be automatically repositioned and resized as needed, so you can
    use your own absolute positioning and the 'top', 'right', etc. styles to be positioned relative to the element
    on-screen.
 */


/*
    onDestroy will be called when the element is de-selected, or when this module otherwise needs to tidy up.
     If you created any DOM elements in onCreate, please remove them from the DOM and destroy them here.
 */


/*
    onUpdate will be called any time that the element is changed (e.g. resized, aligned, etc.)
     This frequently happens during resize dragging, so keep computations light while here to ensure a smooth
    user experience.
 */
;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(21);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(49),
    getValue = __webpack_require__(66);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(13),
    isLength = __webpack_require__(30);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObject = __webpack_require__(0);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(10),
    eq = __webpack_require__(8);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(42),
    assignMergeValue = __webpack_require__(18),
    baseFor = __webpack_require__(47),
    baseMergeDeep = __webpack_require__(52),
    isObject = __webpack_require__(0),
    keysIn = __webpack_require__(32);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(26),
    overRest = __webpack_require__(90),
    setToString = __webpack_require__(91);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(108)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(89);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(48),
    isObjectLike = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(103);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(50),
    baseUnary = __webpack_require__(55),
    nodeUtil = __webpack_require__(87);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(44),
    baseKeysIn = __webpack_require__(51),
    isArrayLike = __webpack_require__(12);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    modules: [
    //'DisplaySize',
    // 'Toolbar',
    'Resize'],
    overlayStyles: {
        position: 'absolute',
        boxSizing: 'border-box',
        border: '1px dashed #444',
        pointerEvents: 'none',
        background: "black",
        mixBlendMode: "lighten"
    },
    cropOverlayStyles: {
        position: 'absolute',
        boxSizing: 'border-box',
        border: '0px solid rgba(0,0,0,.4)',
        pointerEvents: 'none'
    },
    handleStyles: {
        position: 'absolute',
        height: '12px',
        width: '12px',
        backgroundColor: 'white',
        border: '1px solid #777',
        boxSizing: 'border-box',
        opacity: '0.80',
        pointerEvents: 'all',
        cursor: "pointer"
    },
    displayStyles: {
        position: 'absolute',
        font: '12px/1.0 Arial, Helvetica, sans-serif',
        padding: '4px 8px',
        textAlign: 'center',
        backgroundColor: 'white',
        color: '#333',
        border: '1px solid #777',
        boxSizing: 'border-box',
        opacity: '0.80',
        cursor: 'default'
    },
    toolbarStyles: {
        position: 'absolute',
        top: '-12px',
        right: '0',
        left: '0',
        height: '0',
        minWidth: '100px',
        font: '12px/1.0 Arial, Helvetica, sans-serif',
        textAlign: 'center',
        color: '#333',
        boxSizing: 'border-box',
        cursor: 'default'
    },
    toolbarButtonStyles: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        border: '1px solid #999',
        verticalAlign: 'middle'
    },
    toolbarButtonSvgStyles: {
        fill: '#444',
        stroke: '#444',
        strokeWidth: '2'
    }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaySize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseModule__ = __webpack_require__(9);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DisplaySize = function (_BaseModule) {
    _inherits(DisplaySize, _BaseModule);

    function DisplaySize() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DisplaySize);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DisplaySize.__proto__ || Object.getPrototypeOf(DisplaySize)).call.apply(_ref, [this].concat(args))), _this), _this.onCreate = function () {
            // Create the container to hold the size display
            _this.display = document.createElement('div');

            // Apply styles
            Object.assign(_this.display.style, _this.options.displayStyles);

            // Attach it
            _this.overlay.appendChild(_this.display);
        }, _this.onDestroy = function () {}, _this.onUpdate = function () {
            if (!_this.display || !_this.img) {
                return;
            }

            var size = _this.getCurrentSize();
            _this.display.innerHTML = size.join(' &times; ');
            if (size[0] > 120 && size[1] > 30) {
                // position on top of image
                Object.assign(_this.display.style, {
                    right: '4px',
                    bottom: '4px',
                    left: 'auto'
                });
            } else if (_this.img.style.float == 'right') {
                // position off bottom left
                var dispRect = _this.display.getBoundingClientRect();
                Object.assign(_this.display.style, {
                    right: 'auto',
                    bottom: '-' + (dispRect.height + 4) + 'px',
                    left: '-' + (dispRect.width + 4) + 'px'
                });
            } else {
                // position off bottom right
                var _dispRect = _this.display.getBoundingClientRect();
                Object.assign(_this.display.style, {
                    right: '-' + (_dispRect.width + 4) + 'px',
                    bottom: '-' + (_dispRect.height + 4) + 'px',
                    left: 'auto'
                });
            }
        }, _this.getCurrentSize = function () {
            return [_this.img.width, Math.round(_this.img.width / _this.img.naturalWidth * _this.img.naturalHeight)];
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return DisplaySize;
}(__WEBPACK_IMPORTED_MODULE_0__BaseModule__["a" /* BaseModule */]);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parchment = Quill.import('parchment');
var BaseImage = Quill.import('formats/image');

var ATTRIBUTES = ['alt', 'height', 'width', 'style', 'data-full-width', 'data-full-height', 'data-crop-top', 'data-crop-bottom', 'data-crop-left', 'data-crop-right', 'data-pan-top', 'data-pan-left'];

var WHITE_STYLE = ['margin', 'display', 'float', 'object-position', 'background-image', 'background-position', 'background-repeat', 'background-size'];

var Image2 = function (_BaseImage) {
  _inherits(Image2, _BaseImage);

  function Image2() {
    _classCallCheck(this, Image2);

    return _possibleConstructorReturn(this, (Image2.__proto__ || Object.getPrototypeOf(Image2)).apply(this, arguments));
  }

  _createClass(Image2, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          if (name === 'style') {
            console.log(value);
            value = this.sanitize_style(value);
          }
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Image2.prototype.__proto__ || Object.getPrototypeOf(Image2.prototype), 'format', this).call(this, name, value);
      }
    }
  }, {
    key: 'sanitize_style',
    value: function sanitize_style(style) {
      var style_arr = style.split(";");
      var allow_style = "";
      style_arr.forEach(function (v, i) {
        if (WHITE_STYLE.indexOf(v.trim().split(":")[0]) !== -1) {
          allow_style += v + ";";
        }
      });
      return allow_style;
    }
  }], [{
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }]);

  return Image2;
}(BaseImage);

console.log("[ResizeImage] registering image");
Quill.register({ "formats/image": Image2 });
/* unused harmony default export */ var _unused_webpack_default_export = (Image2);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseModule__ = __webpack_require__(9);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Resize = function (_BaseModule) {
    _inherits(Resize, _BaseModule);

    function Resize() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Resize);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Resize.__proto__ || Object.getPrototypeOf(Resize)).call.apply(_ref, [this].concat(args))), _this), _this.onCreate = function () {

            if (_this.img.getAttribute("data-full-width")) {
                _this.img.width = +_this.img.getAttribute("data-full-width");
            }

            // if (this.img.attributes["data-full-height"]){
            // this.img.height= this.img.attributes["data-full-height"];
            // }else{
            // }
            _this.img.removeAttribute("height");
            _this.img.style.height = null;

            // track resize handles
            _this.boxes = [];
            _this.cropboxes = _this.cropboxes || [];
            _this.crop = {
                top: +(_this.img.getAttribute("data-crop-top") || 0),
                bottom: +(_this.img.getAttribute("data-crop-bottom") || 0),
                left: +(_this.img.getAttribute("data-crop-left") || 0),
                right: +(_this.img.getAttribute("data-crop-right") || 0)
            };
            _this.pan = {
                top: +(_this.img.getAttribute("data-pan-top") || 0),
                left: +(_this.img.getAttribute("data-pan-left") || 0)
            };

            _this.img.style.backgroundPosition = _this.pan.left * _this.img.width + "px " + _this.pan.top * _this.img.height + "px";
            _this.img.style.backgroundRepeat = "no-repeat";

            // add 4 resize handles
            _this.addBox('nwse-resize'); // top left
            _this.addBox('nesw-resize'); // top right
            _this.addBox('nwse-resize'); // bottom right
            _this.addBox('nesw-resize'); // bottom left

            _this.addCropBox('w-crop'); // left
            _this.addCropBox('e-crop'); // right
            _this.addCropBox('n-crop'); // top
            _this.addCropBox('s-crop'); // bottom

            _this.img.addEventListener('mousedown', _this.handleMousedownPan, false);

            _this.positionBoxes();
        }, _this.onDestroy = function () {
            // reset drag handle cursors
            _this.setCursor('');
            _this.img.style.backgroundPosition = (-_this.crop.left + _this.pan.left) * _this.img.width + "px " + (-_this.crop.top + _this.pan.top) * _this.img.height + "px";
            _this.img.setAttribute("data-full-height", _this.img.height);
            _this.img.setAttribute("data-full-width", _this.img.width);
            var h = _this.img.height * (1 - (_this.crop.top + _this.crop.bottom));
            var w = _this.img.width * (1 - (_this.crop.left + _this.crop.right));
            _this.img.style.backgroundSize = _this.img.width + "px";
            _this.img.height = h;
            _this.img.width = w;
            _this.img.style.width = null;
            _this.img.qqq = "hi";
            _this.onUpdate();

            _this.img.removeEventListener('mousedown', _this.handleMousedownPan);
        }, _this.positionBoxes = function () {
            var handleXOffset = -parseFloat(_this.options.handleStyles.width) / 2 + "px";
            var handleYOffset = -parseFloat(_this.options.handleStyles.height) / 2 + "px";

            // set the top and left for each drag handle
            [{ left: handleXOffset, top: handleYOffset }, // top left
            { right: handleXOffset, top: handleYOffset }, // top right
            { right: handleXOffset, bottom: handleYOffset }, // bottom right
            { left: handleXOffset, bottom: handleYOffset }].forEach(function (pos, idx) {
                Object.assign(_this.boxes[idx].style, pos);
            });

            _this.fixCropBoxes();
        }, _this.fixCropBoxes = function () {
            // const handleLeftOffset = `${-1 + this.crop.left}px`;
            // const handleRightOffset = `${-1 + this.crop.right}px`;
            // const handleTopOffset = `${-1 + this.crop.top}px`;
            // const handleBottomOffset = `${-1 + this.crop.bottom}px`;

            var handleLeftOffset = -1 + "px";
            var handleRightOffset = -1 + "px";
            var handleTopOffset = -1 + "px";
            var handleBottomOffset = -1 + "px";

            var handleXMid = parseFloat(_this.img.width * (1 - (_this.crop.left + _this.crop.right))) / 2 - parseFloat(_this.options.handleStyles.width + 3) + "px";
            var handleYMid = parseFloat(_this.img.height * (1 - (_this.crop.top + _this.crop.bottom))) / 2 - parseFloat(_this.options.handleStyles.height + 3) + "px";

            var doubleHeight = parseFloat(_this.options.handleStyles.height) * 2 + "px";
            var doubleWidth = parseFloat(_this.options.handleStyles.width) * 2 + "px";
            var halfHeight = parseFloat(_this.options.handleStyles.height) * 2 / 3 + "px";
            var halfWidth = parseFloat(_this.options.handleStyles.width) * 2 / 3 + "px";

            // set the top and left for each drag handle
            [{ left: handleLeftOffset, top: handleYMid, height: doubleHeight, width: halfWidth }, // left
            { right: handleRightOffset, top: handleYMid, height: doubleHeight, width: halfWidth }, // right
            { left: handleXMid, top: handleTopOffset, width: doubleWidth, height: halfHeight }, // top
            { left: handleXMid, bottom: handleBottomOffset, width: doubleWidth, height: halfHeight }].forEach(function (pos, idx) {
                Object.assign(_this.cropboxes[idx].style, pos);
            });
        }, _this.addBox = function (cursor) {
            // create div element for resize handle
            var box = document.createElement('div');

            // Star with the specified styles
            Object.assign(box.style, _this.options.handleStyles);
            box.style.cursor = cursor;

            // Set the width/height to use 'px'
            box.style.width = _this.options.handleStyles.width + "px";
            box.style.height = _this.options.handleStyles.height + "px";

            // listen for mousedown on each box
            box.addEventListener('mousedown', _this.handleMousedown, false);
            // add drag handle to document
            _this.overlay.appendChild(box);
            // keep track of drag handle
            _this.boxes.push(box);
        }, _this.addCropBox = function (cursor) {
            // create div element for resize handle
            var box = document.createElement('div');

            // Star with the specified styles
            Object.assign(box.style, _this.options.handleStyles);
            box.style.cursor = cursor;

            // Set the width/height to use 'px'
            box.style.width = _this.options.handleStyles.width + "px";
            box.style.height = _this.options.handleStyles.height + "px";

            // listen for mousedown on each box
            box.addEventListener('mousedown', _this.handleMousedownCrop);
            // add drag handle to document
            _this.cropOverlay.appendChild(box);
            // keep track of drag handle
            _this.cropboxes.push(box);
        }, _this.handleMousedown = function (evt) {

            // note which box
            _this.dragBox = evt.target;
            // note starting mousedown position
            _this.dragStartX = evt.clientX;
            // store the width before the drag
            _this.preDragWidth = _this.img.width || _this.img.naturalWidth;
            // set the proper cursor everywhere
            _this.setCursor(_this.dragBox.style.cursor);
            // listen for movement and mouseup
            document.addEventListener('mousemove', _this.handleDrag, false);
            document.addEventListener('mouseup', _this.handleMouseup, false);
        }, _this.handleMouseup = function () {
            // reset cursor everywhere
            _this.setCursor('');
            // stop listening for movement and mouseup
            document.removeEventListener('mousemove', _this.handleDrag);
            document.removeEventListener('mouseup', _this.handleMouseup);
        }, _this.handleDrag = function (evt) {
            if (!_this.img) {
                // image not set yet
                return;
            }
            // update image size
            var deltaX = evt.clientX - _this.dragStartX;
            if (_this.dragBox === _this.boxes[0] || _this.dragBox === _this.boxes[3]) {
                // left-side resize handler; dragging right shrinks image
                //this.img.width = Math.round(this.preDragWidth - deltaX);
                _this.img.style.width = Math.round(_this.preDragWidth - deltaX) + "px";
                _this.img.style.backgroundSize = Math.round(_this.preDragWidth - deltaX) + "px";
            } else {
                // right-side resize handler; dragging right enlarges image
                // this.img.width = Math.round(this.preDragWidth + deltaX);
                _this.img.style.width = Math.round(_this.preDragWidth + deltaX) + "px";
                _this.img.style.backgroundSize = Math.round(_this.preDragWidth + deltaX) + "px";
            }
            _this.fixCropBoxes();
            _this.requestUpdate();
        }, _this.handleMousedownCrop = function (evt) {

            _this.img.style.pointerEvents = "none";

            console.log("crop - mousedown");
            // note which box
            _this.dragBox = evt.target;
            // note starting mousedown position
            _this.dragStartX = evt.clientX;
            _this.dragStartY = evt.clientY;
            // store the width before the drag
            _this.preDragLeft = (_this.crop.left || 0) * _this.img.width;
            _this.preDragRight = (_this.crop.right || 0) * _this.img.width;
            _this.preDragTop = (_this.crop.top || 0) * _this.img.height;
            _this.preDragBottom = (_this.crop.bottom || 0) * _this.img.height;
            // set the proper cursor everywhere
            _this.setCursor(_this.dragBox.style.cursor);
            // listen for movement and mouseup
            document.addEventListener('mousemove', _this.handleDragCrop, false);
            document.addEventListener('mouseup', _this.handleMouseupCrop, false);
        }, _this.handleMouseupCrop = function () {
            console.log("crop - mouseup");
            _this.img.style.pointerEvents = null;
            // reset cursor everywhere
            _this.setCursor('');
            // stop listening for movement and mouseup
            document.removeEventListener('mousemove', _this.handleDragCrop);
            document.removeEventListener('mouseup', _this.handleMouseupCrop);

            _this.img.style.cursor = "move";
        }, _this.handleDragCrop = function (evt) {
            if (!_this.img) {
                // image not set yet
                return;
            }
            // update image size
            var deltaX = evt.clientX - _this.dragStartX;
            var deltaY = evt.clientY - _this.dragStartY;

            if (_this.dragBox === _this.cropboxes[0]) {
                //left
                _this.crop.left = Math.min(Math.max((_this.preDragLeft + deltaX) / _this.img.width, 0), 1 - _this.crop.right); //this.img.width - this.crop.right);
                _this.img.setAttribute("data-crop-left", _this.crop.left);
            } else if (_this.dragBox === _this.cropboxes[1]) {
                //right
                _this.crop.right = Math.min(Math.max((_this.preDragRight - deltaX) / _this.img.width, 0), 1 - _this.crop.left);
                _this.img.setAttribute("data-crop-right", _this.crop.right);
            } else if (_this.dragBox === _this.cropboxes[2]) {
                //top	
                //this.crop.top = Math.max(Math.round( deltaY),0);
                _this.crop.top = Math.min(Math.max((_this.preDragTop + deltaY) / _this.img.height, 0), 1 - _this.crop.bottom);
                _this.img.setAttribute("data-crop-top", _this.crop.top);
            } else if (_this.dragBox === _this.cropboxes[3]) {
                //bottom
                console.info((_this.preDragBottom - deltaY) / _this.img.height);
                //this.crop.bottom = Math.max(Math.round(-deltaY),0);			
                _this.crop.bottom = Math.min(Math.max((_this.preDragBottom - deltaY) / _this.img.height, 0), 1 - _this.crop.top);
                _this.img.setAttribute("data-crop-bottom", _this.crop.bottom);
            } else {
                console.error("unknown crop box");
            }
            _this.fixCropBoxes();
            _this.requestUpdate();
        }, _this.handleMousedownPan = function (evt) {
            evt.preventDefault();
            _this.img.setAttribute("draggable", false);

            // note which box
            _this.dragBox = evt.target;
            // note starting mousedown position
            _this.dragStartX = evt.clientX;
            _this.dragStartY = evt.clientY;
            // store the width before the drag
            _this.preDragX = parseFloat(_this.img.style.backgroundPositionX || 0);
            _this.preDragY = parseFloat(_this.img.style.backgroundPositionY || 0);
            // set the proper cursor everywhere
            _this.setCursor(_this.dragBox.style.cursor);
            // listen for movement and mouseup
            document.addEventListener('mousemove', _this.handleDragPan, false);
            document.addEventListener('mouseup', _this.handleMouseupPan, false);
            //this.img.style.pointerEvents="none";

        }, _this.handleMouseupPan = function (e) {
            e.stopImmediatePropagation();
            //this.img.style.pointerEvents="all";
            // reset cursor everywhere
            _this.setCursor('');
            // stop listening for movement and mouseup
            document.removeEventListener('mousemove', _this.handleDragPan);
            document.removeEventListener('mouseup', _this.handleMouseupPan);
        }, _this.handleDragPan = function (evt) {
            if (!_this.img) {
                // image not set yet
                return;
            }
            // update image size
            var deltaX = evt.clientX - _this.dragStartX;
            var deltaY = evt.clientY - _this.dragStartY;

            var left = Math.max(Math.min((deltaX + _this.preDragX) / _this.img.width, _this.crop.left), -_this.crop.right);
            var top = Math.max(Math.min((deltaY + _this.preDragY) / _this.img.height, _this.crop.top), -_this.crop.bottom);

            //left = left, );

            _this.img.style.backgroundPositionX = left * _this.img.width + "px";
            _this.img.style.backgroundPositionY = top * _this.img.height + "px";

            _this.img.setAttribute("data-pan-left", left);
            _this.img.setAttribute("data-pan-top", top);

            _this.pan.left = left;
            _this.pan.top = top;

            _this.requestUpdate();
        }, _this.setCursor = function (value) {
            [document.body, _this.img].forEach(function (el) {
                el.style.cursor = value; // eslint-disable-line no-param-reassign
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //////RESIZE


    //////CROP


    ////////////// PAN

    ////////////////////////

    // initPan = (evt)=>{
    // // this.img.style.webkitUserSelect="none";
    // // this.img.style.khtmlUserSelect="none";
    // // this.img.style.mozUserSelect="none";
    // // this.img.style.oUserSelect="none";
    // // this.img.style.userSelect="none";

    // };


    return Resize;
}(__WEBPACK_IMPORTED_MODULE_0__BaseModule__["a" /* BaseModule */]);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quill_assets_icons_align_left_svg__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quill_assets_icons_align_left_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quill_assets_icons_align_left_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quill_assets_icons_align_center_svg__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quill_assets_icons_align_center_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quill_assets_icons_align_center_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill_assets_icons_align_right_svg__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill_assets_icons_align_right_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_quill_assets_icons_align_right_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BaseModule__ = __webpack_require__(9);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Parchment = window.Quill.imports.parchment;
var FloatStyle = new Parchment.Attributor.Style('float', 'float');
var MarginStyle = new Parchment.Attributor.Style('margin', 'margin');
var DisplayStyle = new Parchment.Attributor.Style('display', 'display');

var Toolbar = function (_BaseModule) {
    _inherits(Toolbar, _BaseModule);

    function Toolbar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Toolbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call.apply(_ref, [this].concat(args))), _this), _this.onCreate = function () {
            // Setup Toolbar
            _this.toolbar = document.createElement('div');
            Object.assign(_this.toolbar.style, _this.options.toolbarStyles);
            _this.overlay.appendChild(_this.toolbar);

            // Setup Buttons
            _this._defineAlignments();
            _this._addToolbarButtons();
        }, _this.onDestroy = function () {}, _this.onUpdate = function () {}, _this._defineAlignments = function () {
            _this.alignments = [{
                icon: __WEBPACK_IMPORTED_MODULE_0_quill_assets_icons_align_left_svg___default.a,
                apply: function apply() {
                    DisplayStyle.add(_this.img, 'inline');
                    FloatStyle.add(_this.img, 'left');
                    MarginStyle.add(_this.img, '0 1em 1em 0');
                },
                isApplied: function isApplied() {
                    return FloatStyle.value(_this.img) == 'left';
                }
            }, {
                icon: __WEBPACK_IMPORTED_MODULE_1_quill_assets_icons_align_center_svg___default.a,
                apply: function apply() {
                    DisplayStyle.add(_this.img, 'block');
                    FloatStyle.remove(_this.img);
                    MarginStyle.add(_this.img, 'auto');
                },
                isApplied: function isApplied() {
                    return MarginStyle.value(_this.img) == 'auto';
                }
            }, {
                icon: __WEBPACK_IMPORTED_MODULE_2_quill_assets_icons_align_right_svg___default.a,
                apply: function apply() {
                    DisplayStyle.add(_this.img, 'inline');
                    FloatStyle.add(_this.img, 'right');
                    MarginStyle.add(_this.img, '0 0 1em 1em');
                },
                isApplied: function isApplied() {
                    return FloatStyle.value(_this.img) == 'right';
                }
            }];
        }, _this._addToolbarButtons = function () {
            var buttons = [];
            _this.alignments.forEach(function (alignment, idx) {
                var button = document.createElement('span');
                buttons.push(button);
                button.innerHTML = alignment.icon;
                button.addEventListener('click', function () {
                    // deselect all buttons
                    buttons.forEach(function (button) {
                        return button.style.filter = '';
                    });
                    if (alignment.isApplied()) {
                        // If applied, unapply
                        FloatStyle.remove(_this.img);
                        MarginStyle.remove(_this.img);
                        DisplayStyle.remove(_this.img);
                    } else {
                        // otherwise, select button and apply
                        _this._selectButton(button);
                        alignment.apply();
                    }
                    // image may change position; redraw drag handles
                    _this.requestUpdate();
                });
                Object.assign(button.style, _this.options.toolbarButtonStyles);
                if (idx > 0) {
                    button.style.borderLeftWidth = '0';
                }
                Object.assign(button.children[0].style, _this.options.toolbarButtonSvgStyles);
                if (alignment.isApplied()) {
                    // select button if previously applied
                    _this._selectButton(button);
                }
                _this.toolbar.appendChild(button);
            });
        }, _this._selectButton = function (button) {
            button.style.filter = 'invert(20%)';
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // The toolbar and its children will be destroyed when the overlay is removed


    // Nothing to update on drag because we are are positioned relative to the overlay


    return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_3__BaseModule__["a" /* BaseModule */]);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(17),
    baseRest = __webpack_require__(20),
    customDefaultsMerge = __webpack_require__(64),
    mergeWith = __webpack_require__(102);

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DefaultOptions__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_DisplaySize__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Toolbar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_Resize__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_ResizableImage__ = __webpack_require__(35);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var knownModules = { DisplaySize: __WEBPACK_IMPORTED_MODULE_2__modules_DisplaySize__["a" /* DisplaySize */], Toolbar: __WEBPACK_IMPORTED_MODULE_3__modules_Toolbar__["a" /* Toolbar */], Resize: __WEBPACK_IMPORTED_MODULE_4__modules_Resize__["a" /* Resize */] };

/**
 * Custom module for quilljs to allow user to resize <img> elements
 * (Works on Chrome, Edge, Safari and replaces Firefox's native resize behavior)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */

var ImageResize = function ImageResize(quill) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ImageResize);

    this.initializeModules = function () {
        _this.removeModules();

        _this.modules = _this.moduleClasses.map(function (ModuleClass) {
            return new (knownModules[ModuleClass] || ModuleClass)(_this);
        });

        _this.modules.forEach(function (module) {
            module.onCreate();
        });

        _this.onUpdate();
    };

    this.onUpdate = function () {
        _this.repositionElements();
        _this.modules.forEach(function (module) {
            module.onUpdate();
        });
    };

    this.removeModules = function () {
        _this.modules.forEach(function (module) {
            module.onDestroy();
        });

        _this.modules = [];
    };

    this.handleClick = function (evt) {
        if (evt.target && evt.target.tagName && evt.target.tagName.toUpperCase() === 'IMG') {
            if (_this.img === evt.target) {
                // we are already focused on this image
                return;
            }
            if (_this.img) {
                // we were just focused on another image
                _this.hide();
            }
            // clicked on an image inside the editor
            _this.show(evt.target);
        } else if (_this.img) {
            // clicked on a non image
            _this.hide();
        }
    };

    this.show = function (img) {
        // keep track of this img element
        _this.img = img;

        _this.showOverlay();

        _this.initializeModules();
    };

    this.showOverlay = function () {
        if (_this.overlay) {
            _this.hideOverlay();
        }

        _this.quill.setSelection(null);

        // prevent spurious text selection
        _this.setUserSelect('none');

        // listen for the image being deleted or moved
        document.addEventListener('keyup', _this.checkImage, true);
        _this.quill.root.addEventListener('input', _this.checkImage, true);

        // Create and add the overlay
        _this.overlay = document.createElement('div');
        Object.assign(_this.overlay.style, _this.options.overlayStyles);
        _this.quill.root.parentNode.appendChild(_this.overlay);

        // Create and add the overlay
        _this.cropOverlay = document.createElement('div');
        Object.assign(_this.cropOverlay.style, _this.options.cropOverlayStyles);
        _this.quill.root.parentNode.appendChild(_this.cropOverlay);

        _this.repositionElements();
    };

    this.hideOverlay = function () {
        if (!_this.overlay) {
            return;
        }

        // Remove the overlay
        _this.quill.root.parentNode.removeChild(_this.overlay);
        _this.quill.root.parentNode.removeChild(_this.cropOverlay);
        _this.overlay = undefined;
        _this.cropOverlay = undefined;

        // stop listening for image deletion or movement
        document.removeEventListener('keyup', _this.checkImage);
        _this.quill.root.removeEventListener('input', _this.checkImage);

        _this.img.style.cursor = "default";
        // reset user-select
        _this.setUserSelect('');
    };

    this.repositionElements = function () {
        if (!_this.overlay || !_this.img /*|| !this.crop || !this.cropOverlay*/) {
                return;
            }

        // position the overlay over the image
        var parent = _this.quill.root.parentNode;
        var imgRect = _this.img.getBoundingClientRect();
        var containerRect = parent.getBoundingClientRect();
        var cropRect = {
            top: +(_this.img.getAttribute("data-crop-top") || 0),
            bottom: +(_this.img.getAttribute("data-crop-bottom") || 0),
            left: +(_this.img.getAttribute("data-crop-left") || 0),
            right: +(_this.img.getAttribute("data-crop-right") || 0)
        };

        Object.assign(_this.overlay.style, {
            left: imgRect.left - containerRect.left - 1 + parent.scrollLeft + 'px',
            top: imgRect.top - containerRect.top + parent.scrollTop + 'px',
            width: imgRect.width + 'px',
            height: imgRect.height + 'px'
        });

        Object.assign(_this.cropOverlay.style, {
            borderLeftWidth: imgRect.width * cropRect.left + 'px',
            borderRightWidth: imgRect.width * cropRect.right + 'px',
            //borderRightWidth:`${cropRect.right }px`,
            borderTopWidth: imgRect.height * cropRect.top + 'px',
            borderBottomWidth: imgRect.height * cropRect.bottom + 'px',
            left: imgRect.left - containerRect.left - 1 + parent.scrollLeft + 'px',
            top: imgRect.top - containerRect.top + parent.scrollTop + 'px',
            width: imgRect.width + 'px',
            height: imgRect.height + 'px'
        });
    };

    this.hide = function () {
        _this.hideOverlay();
        _this.removeModules();
        _this.img = undefined;
    };

    this.setUserSelect = function (value) {
        ['userSelect', 'mozUserSelect', 'webkitUserSelect', 'msUserSelect'].forEach(function (prop) {
            // set on contenteditable element and <html>
            _this.quill.root.style[prop] = value;
            document.documentElement.style[prop] = value;
        });
    };

    this.checkImage = function (evt) {
        if (_this.img) {
            if (evt.keyCode == 46 || evt.keyCode == 8) {
                window.Quill.find(_this.img).deleteAt(0);
            }
            _this.hide();
        }
    };

    // save the quill reference and options
    this.quill = quill;

    // Apply the options to our defaults, and stash them for later
    // defaultsDeep doesn't do arrays as you'd expect, so we'll need to apply the classes array from options separately
    var moduleClasses = false;
    if (options.modules) {
        moduleClasses = options.modules.slice();
    }

    // Apply options to default options
    this.options = __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep___default()({}, options, __WEBPACK_IMPORTED_MODULE_1__DefaultOptions__["a" /* default */]);

    // (see above about moduleClasses)
    if (moduleClasses !== false) {
        this.options.modules = moduleClasses;
    }

    // disable native image resizing on firefox
    document.execCommand('enableObjectResizing', false, 'false');

    // respond to clicks inside the editor
    this.quill.root.addEventListener('click', this.handleClick, false);

    this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || 'relative';

    // setup modules
    this.moduleClasses = this.options.modules;

    this.modules = [];

    this.quill.on('editor-change', function (a, b, c) {
        //debugger;
    });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageResize);


if (window.Quill) {
    window.Quill.register('modules/imageResize', ImageResize);
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(67),
    hashDelete = __webpack_require__(68),
    hashGet = __webpack_require__(69),
    hashHas = __webpack_require__(70),
    hashSet = __webpack_require__(71);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(81),
    mapCacheDelete = __webpack_require__(82),
    mapCacheGet = __webpack_require__(83),
    mapCacheHas = __webpack_require__(84),
    mapCacheSet = __webpack_require__(85);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(3),
    stackClear = __webpack_require__(93),
    stackDelete = __webpack_require__(94),
    stackGet = __webpack_require__(95),
    stackHas = __webpack_require__(96),
    stackSet = __webpack_require__(97);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(54),
    isArguments = __webpack_require__(27),
    isArray = __webpack_require__(28),
    isBuffer = __webpack_require__(29),
    isIndex = __webpack_require__(24),
    isTypedArray = __webpack_require__(31);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(10),
    eq = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(63);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(13),
    isMasked = __webpack_require__(75),
    isObject = __webpack_require__(0),
    toSource = __webpack_require__(98);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isLength = __webpack_require__(30),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    isPrototype = __webpack_require__(25),
    nativeKeysIn = __webpack_require__(86);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(18),
    cloneBuffer = __webpack_require__(57),
    cloneTypedArray = __webpack_require__(58),
    copyArray = __webpack_require__(59),
    initCloneObject = __webpack_require__(72),
    isArguments = __webpack_require__(27),
    isArray = __webpack_require__(28),
    isArrayLikeObject = __webpack_require__(100),
    isBuffer = __webpack_require__(29),
    isFunction = __webpack_require__(13),
    isObject = __webpack_require__(0),
    isPlainObject = __webpack_require__(101),
    isTypedArray = __webpack_require__(31),
    toPlainObject = __webpack_require__(104);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(99),
    defineProperty = __webpack_require__(21),
    identity = __webpack_require__(26);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(43);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(56);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(45),
    baseAssignValue = __webpack_require__(10);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(20),
    isIterateeCall = __webpack_require__(73);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(19),
    isObject = __webpack_require__(0);

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(7);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(7);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(7);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(46),
    getPrototype = __webpack_require__(23),
    isPrototype = __webpack_require__(25);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(8),
    isArrayLike = __webpack_require__(12),
    isIndex = __webpack_require__(24),
    isObject = __webpack_require__(0);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(61);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(40),
    ListCache = __webpack_require__(3),
    Map = __webpack_require__(15);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(6);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(6);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(6);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(6);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(22);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 88 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(17);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(53),
    shortOut = __webpack_require__(92);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(3);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(3),
    Map = __webpack_require__(15),
    MapCache = __webpack_require__(41);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(12),
    isObjectLike = __webpack_require__(2);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    getPrototype = __webpack_require__(23),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(19),
    createAssigner = __webpack_require__(62);

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(60),
    keysIn = __webpack_require__(32);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\">\n  <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"></line>\n  <line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"></line>\n  <line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"></line>\n</svg>"

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\">\n  <line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"></line>\n  <line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"></line>\n  <line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"></line>\n</svg>"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\">\n  <line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"></line>\n  <line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"></line>\n  <line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"></line>\n</svg>"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});