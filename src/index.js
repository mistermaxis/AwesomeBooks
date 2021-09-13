let btn = document.getElementById('btn');

function deleteBook(event) {
  event.currentTarget;
}

function add() {
  let autor = document.getElementById('autor');
  let title = document.getElementById('title');
  let books = document.getElementById('books');

  autorText = document.createElement('p');
  titleText = document.createElement('p');
  deleteBtn = document.createElement('button');

  deleteBtn.innerHTML = 'Delete';

  autorText.innerHTML = autor.value;
  titleText.innerHTML = title.value;

  deleteBtn.addEventListener('click', deleteBook);



  books.appendChild(autorText);
  books.appendChild(titleText);
  books.appendChild(deleteBtn);
// document.body.appendChild(books);
}

btn.addEventListener('click',add);


