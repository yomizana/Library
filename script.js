const myLibrary = [];
const addBookButton = document.getElementById("add-book-btn");

class Book {
  constructor(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = this.read === "Yes" ? "No" : "Yes";
  }
}

function createRemoveButton(index, refreshTable) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "button";
  button.textContent = "Remove";
  button.dataset.index = index;
  button.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    refreshTable();
  });

  return button;
}

function createToggleReadButton(index, refreshTable) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "toggle-button";
  button.dataset.index = index;
  button.addEventListener("click", () => {
    myLibrary[index].toggleRead();
    refreshTable();
  });

  return button;
}

function displayBooks() {
  const tableBody = document.getElementById("table-body");

  while (tableBody.rows.length > 0) {
    tableBody.deleteRow(0);
  }

  myLibrary.forEach((book, index) => {
    const removeButton = createRemoveButton(index, displayBooks);
    const toggleReadButton = createToggleReadButton(index, displayBooks);

    const row = tableBody.insertRow();
    const title = row.insertCell(0);
    const author = row.insertCell(1);
    const year = row.insertCell(2);
    const pages = row.insertCell(3);
    const read = row.insertCell(4);
    const toggleRead = row.insertCell(5);
    const remove = row.insertCell(6);

    title.textContent = book.title;
    author.textContent = book.author;
    year.textContent = book.year;
    pages.textContent = book.pages;
    read.textContent = book.read;
    toggleRead.appendChild(toggleReadButton);
    remove.appendChild(removeButton);
  });
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

addBookButton.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelector('input[name="read"]:checked').value;

  const book = new Book(title, author, year, pages, read);
  addBookToLibrary(book);
});

const theHobbit = new Book(
  "The Hobbit",
  "J. R. R. Tolkien",
  "1937",
  "310",
  "No"
);
const aClockWorkOrange = new Book(
  "A Clockwork Orange",
  "Anthony Burgess",
  "1962",
  "192",
  "Yes"
);
const theMetamorphosis = new Book(
  "The Metamorphosis",
  "Franz Kafka",
  "1915",
  "70",
  "No"
);

addBookToLibrary(theHobbit);
addBookToLibrary(aClockWorkOrange);
addBookToLibrary(theMetamorphosis);
