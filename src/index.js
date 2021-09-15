const btn = document.getElementById('btn');
let ids = 0;

let bookList = [];

function displayBooks() {
  const books = document.getElementById('books');
  books.innerHTML = '';

  bookList.forEach((book) => {
    const bookDiv = document.createElement('div');
    const autorText = document.createElement('p');
    const titleText = document.createElement('p');
    const deleteBtn = document.createElement('button');

    /* eslint-disable */
    deleteBtn.addEventListener('click', deleteBook);    
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

function loadBooks() {
  const local = window.localStorage.getItem('awesomebooks');

  if (local != null) {
    bookList = JSON.parse(local);
  }
}

function update() {
  loadBooks();
  displayBooks();
}

function saveBooks() {
  window.localStorage.setItem('awesomebooks', JSON.stringify(bookList));
}

function deleteBook(event) {
  const targetDiv = event.currentTarget.parentElement;
  const divId = targetDiv.id;

  const filter = bookList.filter((book) => book.id !== divId);
  bookList = filter;

  saveBooks();
  displayBooks();
}

window.addEventListener('load', update);

function add() {
  const autor = document.getElementById('autor');
  const title = document.getElementById('title');

  const book = {
    bookAuthor: autor.value,
    bookTitle: title.value,
    id: `id${ids}`,
  };

  ids += 1;

  bookList.push(book);

  saveBooks();
  displayBooks();
}

btn.addEventListener('click', add);
