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
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
}

function displayBooks(newBook) {
  const tableBody = document.getElementById("table-body");
  const libraryLength = myLibrary.length;

  myLibrary.push(newBook);

  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = myLibrary[libraryLength].title;
  cell2.textContent = myLibrary[libraryLength].year;
}

function addBookToLibrary(title, year) {
  const newBook = new Book(title, year);
  displayBooks(newBook);
}

addBookButton.addEventListener("click", () => {
  const title = document.getElementById("name").value;
  const year = document.getElementById("year").value;
  addBookToLibrary(title, year);
});
