const btn = document.getElementById('btn');
let ids = 0;

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
    const bookDiv = document.createElement('div');
    const autorText = document.createElement('p');
    const titleText = document.createElement('p');
    const deleteBtn = document.createElement('button');

    deleteBtn.addEventListener('click', deleteBook);
    deleteBtn.innerHTML = 'Delete';
    bookDiv.id = book.id;

    autorText.innerHTML = book.bookAuthor;
    titleText.innerHTML = book.bookTitle;

    bookDiv.appendChild(autorText);
    bookDiv.appendChild(titleText);
    bookDiv.appendChild(deleteBtn);

    books.appendChild(bookDiv);
  })
}

function deleteBook(event) {
  const targetDiv = event.currentTarget.parentElement;
  let divId = targetDiv.id; 

  let filter = bookList.filter(book => book.id != divId);
  bookList = filter;

  saveBooks();

  displayBooks(); 
  console.log(filter);
}

function add() {
  let autor = document.getElementById('autor');
  let title = document.getElementById('title')

  const book = {
    bookAuthor: autor.value,
    bookTitle: title.value,
    id: "id" + ids
  }

  ids++;

  bookList.push(book);

  saveBooks();

  displayBooks();
}

btn.addEventListener('click',add);
