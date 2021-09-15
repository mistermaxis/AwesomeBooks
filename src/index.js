let btn = document.getElementById('btn');

let bookList = [];

function saveBooks() {
  window.localStorage.setItem('awesomebooks',JSON.stringify(bookList));
}

function loadBooks() {
  bookList = JSON.parse(window.localStorage.getItem('awesomebooks'));
}

function displayBooks() {
  let books = document.getElementById('books');
  books.innerHTML = '';

  bookList.forEach(book => {
    let bookDiv = document.createElement('div');
    let autorText = document.createElement('p');
    let titleText = document.createElement('p');
    let deleteBtn = document.createElement('button');

    deleteBtn.addEventListener('click', deleteBook);
    deleteBtn.innerHTML = 'Delete';

    autorText.innerHTML = book.bookAuthor;
    titleText.innerHTML = book.bookTitle;

    bookDiv.appendChild(autorText);
    bookDiv.appendChild(titleText);
    bookDiv.appendChild(deleteBtn);

    books.appendChild(bookDiv);
  })
}

function deleteBook() {
}

function add() {
  let autor = document.getElementById('autor');
  let title = document.getElementById('title')

  const book = {
    bookAuthor: autor.value,
    bookTitle: title.value
  }

  bookList.push(book);

  saveBooks();

  displayBooks();
}

btn.addEventListener('click',add);


