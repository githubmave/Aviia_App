'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/questions', {templateUrl: 'partials/ques_answList.html', controller: 'MyCtrl1'});
  $routeProvider.when('/questions/:itemRID', {templateUrl: 'partials/ques_answDetails.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/questions'});
}]);
