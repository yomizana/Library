const myLibrary = [];
const showFormButton = document.getElementById("show-form-btn");
const bookForm = document.getElementById("book-form");
const addBookButton = document.getElementById("add-book-btn");

showFormButton.addEventListener("click", () => {
  bookForm.classList.toggle("hidden");

  if (showFormButton.textContent === "Show Form") {
    showFormButton.textContent = "Hide Form";
  } else {
    showFormButton.textContent = "Show Form";
  }
});

class Book {
  constructor(title, author, year, pagesNumber, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pagesNumber = pagesNumber;
    this.read = read;
  }
}

function displayBooks(newBook) {
  const tableBody = document.getElementById("table-body");
  const libraryLength = myLibrary.length;

  myLibrary.push(newBook);

  const row = tableBody.insertRow();
  const title = row.insertCell(0);
  const author = row.insertCell(1);
  const year = row.insertCell(2);
  const pagesNumber = row.insertCell(3);
  const read = row.insertCell(4);

  title.textContent = myLibrary[libraryLength].title;
  author.textContent = myLibrary[libraryLength].author;
  year.textContent = myLibrary[libraryLength].year;
  pagesNumber.textContent = myLibrary[libraryLength].pagesNumber;
  read.textContent = myLibrary[libraryLength].read;
}

function addBookToLibrary(title, author, year, pagesNumber, read) {
  const newBook = new Book(title, author, year, pagesNumber, read);
  displayBooks(newBook);
}

addBookButton.addEventListener("click", () => {
  const title = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const pagesNumber = document.getElementById("pages-num").value;
  const read = document.getElementById("read").value;

  addBookToLibrary(title, author, year, pagesNumber, read);
});
