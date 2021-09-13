import './style.css';

let btn = document.getElementById('btn');

function add() {
  let autor = document.getElementById('autor');
  let title = document.getElementById('title');
  let books = document.getElementById('books');
  
  books.appendChild(autor);
// document.body.appendChild(books);
}

btn.addEventListener('click',add);


