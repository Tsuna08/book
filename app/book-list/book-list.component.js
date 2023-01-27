angular.module("bookList").component("bookList", {
  templateUrl: "book-list/book-list.template.html",
  controller: [
    "$http",
    function BookListController($http) {
      let self = this;
      self.orderProp = "title";
      $http.get("books/books.json").then((response) => {
        self.books = response.data;
      });
    },
  ],
});
