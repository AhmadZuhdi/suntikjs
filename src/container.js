/*
* @Author: ahmadzuhdi
* @Date:   2015-09-18 01:16:24
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-09-18 01:19:28
*/

'use strict';

class Container {

  constructor() {

    this.container = {}
  }

  set(libName, value) {

    this.container[libName] = value
  }

  get(libName) {

    return this.container[libName]
  }
}

module.exports = Container