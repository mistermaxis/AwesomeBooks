const btn = document.getElementById('btn');

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
//  let ids = 0;

  bookList.forEach(book => {
    const bookDiv = document.createElement('div');
    const autorText = document.createElement('p');
    const titleText = document.createElement('p');
    const deleteBtn = document.createElement('button');

    deleteBtn.addEventListener('click', deleteBook);
    deleteBtn.innerHTML = 'Delete';
//    deleteBtn.id = "id" + ids;
//    ids++;

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
  
//  bookList.filter();
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
