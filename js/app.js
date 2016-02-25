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
  // $routeProvider.when('/questions', {templateUrl: 'partials/ques_answList.html', controller: 'MyCtrl1'});
  // $routeProvider.when('/questions/:itemRID', {templateUrl: 'partials/ques_answDetails.html', controller: 'MyCtrl1'});
  

  $routeProvider.when('/question1', {templateUrl: 'partials/ques1_answ1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/question2/', {templateUrl: 'partials/ques2_answ2.html', controller: 'MyCtrl2'});





  $routeProvider.otherwise({redirectTo: '/question1'});
}]);
