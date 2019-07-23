'use strict';

angular.
    module('bookDescription').
    component('bookDescription', {
        // template: 'TBD: Detail view for <span>{{$ctrl.bookId}}</span>',
        templateUrl: 'book-description/book-description.template.html',
        controller: ['$http', '$routeParams',
            function BookDetailController($http, $routeParams) {
                var self = this;
                
                $http.get('books/' + $routeParams.bookId + '.json').then(function(response) {
                    self.book = response.data;
                });
            }
        ]
    });