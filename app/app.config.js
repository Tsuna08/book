'use strict';

angular.
  module('bookApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
    
      $routeProvider.
        when('/books', {
          template: '<book-list></book-list>',
        }).
        when('/books/:bookId', {
          template: '<book-description></book-description>'
        }).
        when('/books/:bookId/read', {
          template: '<book-read></book-read>'
        }).
        otherwise('/books');
    }
  ]);

// 'use strict';

// angular.
//   module('bookApp').
//   config(['$stateProvider', '$urlRouterProvider', '$locationProvider' ,'$routeProvider',
//     function config($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
//       $stateProvider
//       .state('books', {
//         url: "/books",
//         templateUrl: "book-list/book-list.template.html",
//       })
//       .state('description', {
//         url: "/books/:bookId",
//         templateUrl: "book-description/book-description.template.html"
//       })
//       .state('read', {
//         url: "/books/:bookId/read",
//         templateUrl: "book-read/book-read.template.html"
//       });
//       $urlRouterProvider.otherwise('/books');
//     }
//   ]);