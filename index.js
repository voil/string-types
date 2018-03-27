'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = StringTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StringTypes() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  var parsed = params.filter(function (item) {
    return typeof item !== 'undefined';
  }).map(function (item) {
    switch (item.constructor.name) {
      case 'String':
        {
          return item;
        }
      case 'Number':
        {
          return item.toString();
        }
      case 'Object':
        {
          return (0, _keys2.default)(item).filter(function (key) {
            return item[key];
          }).join(' ');
        }
      case 'Array':
        {
          return StringTypes.apply(undefined, (0, _toConsumableArray3.default)(item));
        }
    }
  }).join(' ').trim();

  return parsed;
};

