/*
* @Author: ahmadzuhdi
* @Date:   2015-09-18 00:52:56
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-11-12 07:58:13
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var Resolver = (function () {
  function Resolver(components) {
    _classCallCheck(this, Resolver);

    this.components = components;

    this.container = new _container2['default']();
  }

  /**
   * resolve a module and all dependency
   * @param  {string} libName
   * @return {Object}
   */

  _createClass(Resolver, [{
    key: 'resolve',
    value: function resolve(libName) {
      var _this = this;

      var requiredModule = this.resolveRequire(libName);
      var components = [];
      if (requiredModule['@components']) {
        components = requiredModule['@components'].map(function (component) {
          return _this.resolve(component);
        });
      }

      if (typeof requiredModule === 'function') {
        var finalModule = requiredModule.apply(undefined, _toConsumableArray(components));
        if (requiredModule['@singleton']) {
          this.container.set(libName, finalModule);
        }
        return finalModule;
      } else {
        if (requiredModule['@singleton']) {
          this.container.set(libName, requiredModule);
        }
        return requiredModule;
      }
    }
  }, {
    key: 'resolveRequire',
    value: function resolveRequire(libName) {

      if (this.container.get(libName)) {
        return this.container.get(libName);
      }

      /**
       * check if libName is a alias or not
       */
      if (this.components[libName]) {

        return require(this.components[libName]);
      }

      return require(libName);
    }
  }]);

  return Resolver;
})();

exports['default'] = Resolver;
module.exports = exports['default'];
//# sourceMappingURL=resolver.js.map