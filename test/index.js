/*
* @Author: ahmadzuhdi
* @Date:   2015-09-18 00:05:38
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-11-12 08:00:50
*/

'use strict';

var suntik = require('./../lib')
var di = new suntik({

  components : {

    '@user' : __dirname + '/user',
    '@setting' : __dirname + '/setting',
    '@config' : __dirname + '/config',

  }
})

var user = di.create('@user')

console.log(user.getDate());

setTimeout(function(){
  var user2 = di.create('@user')
  console.log(user2.getDate());
}, 1000)