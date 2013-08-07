// 定义这个数据仓库
var store = angular.module('store', ['ngResource']).factory('Store', function($resource) {
  return {
    user: $resource('/user/:action', {action:'@action'}),
    board: $resource('/board/:action', {action:'@action'}),
    thread : $resource('/thread/:action', {action:'@action'}),
    setting : $resource('/setting', {})
  }
})