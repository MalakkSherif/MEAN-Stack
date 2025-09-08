interface Book{
    id: number,
    title: string,
    author: string
}

class Library{
    books : Book[];

    constructor(){
        this.books=[]
    }

    addBook(book : Book){

        this.books.push(book)
    }

    removeBook(id : number){
        if(!this.books.some(book => book.id === id)){
            console.log("******************Book with Id:"+id+" does\'t exist******************")
            return
        }
        this.books = this.books.filter(book => book.id !== id)
    }

    displayBooks(){
        console.log('-------------------------------------------------')
        for(let book of this.books){
            console.log(`[${book.id}] ${book.title} by ${book.author}`)
        }
        console.log('-------------------------------------------------')
    }
}


var library = new Library()
var book1 : Book ={
    id:123,
    title: 'Alice\'s Adventures in Wonderland',
    author: 'Lewis Carroll'
}
var book2 : Book ={
    id:456,
    title: 'Treasure Island',
    author: 'Robert Louis Steveson'
}
var book3 : Book ={
    id:789,
    title: 'Animal Farm',
    author: 'George Orwell'
}

library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.displayBooks()
library.removeBook(100) //Id does't exist
library.displayBooks() //Still the same
library.removeBook(456) //Id exists, will remove book with id 456
library.displayBooks() 