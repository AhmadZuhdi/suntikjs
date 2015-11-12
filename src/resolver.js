/*
* @Author: ahmadzuhdi
* @Date:   2015-09-18 00:52:56
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-11-12 07:58:13
*/

'use strict';

import container from './container'

class Resolver {

  constructor(components) {

    this.components = components

    this.container = new container()
  }

  /**
   * resolve a module and all dependency
   * @param  {string} libName
   * @return {Object}
   */
  resolve(libName) {

    var requiredModule = this.resolveRequire(libName)
    var components = []
    if(requiredModule['@components']) {
      components = requiredModule['@components'].map(component => this.resolve(component))
    }

    if(typeof requiredModule === 'function') {
      let finalModule = requiredModule(...components)
      if(requiredModule['@singleton']){
        this.container.set(libName, finalModule)
      }
      return finalModule
    } else {
      if(requiredModule['@singleton']){
        this.container.set(libName, requiredModule)
      }
      return requiredModule
    }
  }

  resolveRequire(libName) {

    if(this.container.get(libName)) {
      return this.container.get(libName)
    }

    /**
     * check if libName is a alias or not
     */
    if(this.components[libName]) {

      return require(this.components[libName])
    }

    return require(libName)
  }


}

export default Resolver