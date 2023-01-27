angular.module("bookDescription").component("bookDescription", {
  templateUrl: "book-description/book-description.template.html",
  controller: [
    "$http",
    "$routeParams",
    function BookDetailController($http, $routeParams) {
      let self = this;

      $http.get("books/" + $routeParams.bookId + ".json").then((response) => {
        self.book = response.data;
      });
    },
  ],
});
