/*
* @Author: ahmadzuhdi
* @Date:   2015-09-17 23:56:05
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-11-12 07:55:36
*/

'use strict';

import resolver from './resolver'

/**
 * Main Module
 */
class Suntik {

  /**
   * constructor
   * @param  {Object} config
   */
  constructor(config) {

    this.config = config
    this.container = {}

    this.resolver = new resolver(this.config.components)
  }

  create(libNameo) {

    return this.resolver.resolve(libNameo)
  }
}

module.exports = Suntik