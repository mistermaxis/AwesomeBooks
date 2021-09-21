/* eslint-disable */
const { DateTime } = luxon;    
/* eslint-enable */

const localTime = DateTime.local();
const timestamp = document.getElementById('time-stamp');

timestamp.innerHTML = `${localTime.toLocaleString(DateTime.DATE_FULL)}, ${localTime.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;

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
      bookDiv.classList.add('bookItem');

      const bookText = document.createElement('span');
      const deleteBtn = document.createElement('button');

      /* eslint-disable */
      deleteBtn.addEventListener('click', BooksList.deleteBook);    
      /* eslint-enable */

      deleteBtn.innerHTML = 'Delete';
      bookDiv.id = book.id;

      bookText.innerHTML = `"${book.bookAuthor}" by ${book.bookTitle}`;
      bookDiv.appendChild(bookText);
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

function ShowList() {
  const list = document.getElementById('list');
  list.classList.add('show');
  list.classList.remove('hide');
  const add = document.getElementById('add');
  add.classList.add('hide');
  add.classList.remove('show');
  const info = document.getElementById('info');
  info.classList.add('hide');
  info.classList.remove('show');
}

function ShowAdd() {
  const list = document.getElementById('list');
  list.classList.add('hide');
  list.classList.remove('show');
  const add = document.getElementById('add');
  add.classList.add('show');
  add.classList.remove('hide');
  const info = document.getElementById('info');
  info.classList.add('hide');
  info.classList.remove('show');
}

function ShowInfo() {
  const list = document.getElementById('list');
  list.classList.add('hide');
  list.classList.remove('show');
  const add = document.getElementById('add');
  add.classList.add('hide');
  add.classList.remove('show');
  const info = document.getElementById('info');
  info.classList.add('show');
  info.classList.remove('hide');
}

document.getElementById('link-list').addEventListener('click', ShowList);
document.getElementById('link-add').addEventListener('click', ShowAdd);
document.getElementById('link-info').addEventListener('click', ShowInfo);