var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (id) {
        if (!this.books.some(function (book) { return book.id === id; })) {
            console.log("******************Book with Id:" + id + " does\'t exist******************");
            return;
        }
        this.books = this.books.filter(function (book) { return book.id !== id; });
    };
    Library.prototype.displayBooks = function () {
        console.log('-------------------------------------------------');
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            console.log("[".concat(book.id, "] ").concat(book.title, " by ").concat(book.author));
        }
        console.log('-------------------------------------------------');
    };
    return Library;
}());
var library = new Library();
var book1 = {
    id: 123,
    title: 'Alice\'s Adventures in Wonderland',
    author: 'Lewis Carroll'
};
var book2 = {
    id: 456,
    title: 'Treasure Island',
    author: 'Robert Louis Steveson'
};
var book3 = {
    id: 789,
    title: 'Animal Farm',
    author: 'George Orwell'
};
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayBooks();
library.removeBook(100); //Id does't exist
library.displayBooks(); //Still the same
library.removeBook(456); //Id exists, will remove book with id 456
library.displayBooks();
