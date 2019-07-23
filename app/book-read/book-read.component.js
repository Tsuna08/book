'use strict';

angular.
    module('bookRead').
    component('bookRead', {
        templateUrl: 'book-read/book-read.template.html',
        controller: ['$http', '$routeParams',
            function BookReadController($http, $routeParams) {
                var self = this;
                
                $http.get('books/text/text-' + $routeParams.bookId + '.json').then(function(response) {
                    self.book = response.data;
                });
            }
        ]
    });