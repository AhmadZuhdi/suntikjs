/*
* @Author: ahmadzuhdi
* @Date:   2015-09-18 01:28:33
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-11-12 08:00:14
*/

'use strict';

module.exports = function (setting, config){
  return {
    getConfig : function() {
      return config
    },
    getDate : function(){
      return setting.date
    }
  }
}

module.exports['@components'] = ['@setting', '@config']

module.exports['@singleton'] = false