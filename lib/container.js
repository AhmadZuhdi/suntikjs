/*
* @Author: ahmadzuhdi
* @Date:   2015-09-18 01:16:24
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-09-18 01:19:28
*/

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Container = (function () {
  function Container() {
    _classCallCheck(this, Container);

    this.container = {};
  }

  _createClass(Container, [{
    key: 'set',
    value: function set(libName, value) {

      this.container[libName] = value;
    }
  }, {
    key: 'get',
    value: function get(libName) {

      return this.container[libName];
    }
  }]);

  return Container;
})();

module.exports = Container;
//# sourceMappingURL=container.js.map