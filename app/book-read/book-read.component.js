angular.module("bookRead").component("bookRead", {
  templateUrl: "book-read/book-read.template.html",
  controller: [
    "$http",
    "$routeParams",
    function BookReadController($http, $routeParams) {
      let self = this;

      $http
        .get("books/text/text-" + $routeParams.bookId + ".json")
        .then((response) => {
          self.book = response.data;
        });
    },
  ],
});
