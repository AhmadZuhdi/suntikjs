/*
* @Author: ahmadzuhdi
* @Date:   2015-11-12 07:42:52
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-11-12 08:01:00
*/

'use strict';

module.exports = function(){
  return {
    node : true,
    browser : false,
    date : new Date()
  }
}

module.exports['@singleton'] = true