function Book(title, autor, id) {
  this.bookTitle = title;
  this.bookAuthor = autor;
  this.id = id;
}

const btn = document.getElementById('btn');
let ids = 0;

let bookList = [];

class BooksList {
  static displayBooks() {
    const books = document.getElementById('books');
    books.innerHTML = '';

    bookList.forEach((book) => {
      const bookDiv = document.createElement('div');
      const autorText = document.createElement('p');
      const titleText = document.createElement('p');
      const deleteBtn = document.createElement('button');

      /* eslint-disable */
      deleteBtn.addEventListener('click', BooksList.deleteBook);    
      /* eslint-enable */

      deleteBtn.innerHTML = 'Delete';
      bookDiv.id = book.id;

      autorText.innerHTML = book.bookAuthor;
      titleText.innerHTML = book.bookTitle;

      bookDiv.appendChild(autorText);
      bookDiv.appendChild(titleText);
      bookDiv.appendChild(deleteBtn);

      books.appendChild(bookDiv);
    });
  }

  static loadBooks() {
    const local = window.localStorage.getItem('awesomebooks');

    if (local != null) {
      bookList = JSON.parse(local);
    }
  }

  static update() {
    BooksList.loadBooks();
    BooksList.displayBooks();
  }

  static saveBooks() {
    window.localStorage.setItem('awesomebooks', JSON.stringify(bookList));
  }

  static deleteBook(event) {
    const targetDiv = event.currentTarget.parentElement;
    const divId = targetDiv.id;

    const filter = bookList.filter((book) => book.id !== divId);
    bookList = filter;

    BooksList.saveBooks();
    BooksList.displayBooks();
  }

  static add() {
    const autor = document.getElementById('autor');
    const title = document.getElementById('title');

    const book = new Book(title.value, autor.value, `id${ids}`);

    ids += 1;

    bookList.push(book);

    BooksList.saveBooks();
    BooksList.displayBooks();
  }
}

window.addEventListener('load', BooksList.update);

btn.addEventListener('click', BooksList.add);
