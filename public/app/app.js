// This is a super simple Hello World AngularJS App
'use strict'
var app = angular.module('app', ['ngRoute', 'infinite-scroll', 'toaster']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.

    when('/list', {
        templateUrl: '/public/views/list.html', controller: 'listCtrl'
    }).

    otherwise({
        redirectTo: '/list'
    });
}]);
  
  
//    app.config(function($stateProvider, $urlRouterProvider) {
//
//    $urlRouterProvider.otherwise('/home');
//
//    $stateProvider
//
//        // HOME STATES AND NESTED VIEWS ========================================
//        .state('home', {
//            url: '/home',
//            templateUrl: '/public/views/list.html',
//            controller: 'listCtrl'
//        })
//    });



