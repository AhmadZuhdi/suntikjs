/*
* @Author: ahmadzuhdi
* @Date:   2015-09-17 23:56:05
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-11-12 07:55:36
*/

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _resolver = require('./resolver');

var _resolver2 = _interopRequireDefault(_resolver);

/**
 * Main Module
 */

var Suntik = (function () {

  /**
   * constructor
   * @param  {Object} config
   */

  function Suntik(config) {
    _classCallCheck(this, Suntik);

    this.config = config;
    this.container = {};

    this.resolver = new _resolver2['default'](this.config.components);
  }

  _createClass(Suntik, [{
    key: 'create',
    value: function create(libNameo) {

      return this.resolver.resolve(libNameo);
    }
  }]);

  return Suntik;
})();

module.exports = Suntik;
//# sourceMappingURL=index.js.map