angular.module("bookApp").config([
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");

    $routeProvider
      .when("/books", {
        template: "<book-list></book-list>",
      })
      .when("/books/:bookId", {
        template: "<book-description></book-description>",
      })
      .when("/books/:bookId/read", {
        template: "<book-read></book-read>",
      })
      .otherwise("/books");
  },
]);
