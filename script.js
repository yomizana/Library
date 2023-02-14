const myLibrary = [];

class Book {
  constructor(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const tableBody = document.getElementById("table-body");

  myLibrary.forEach((book) => {
    const row = tableBody.insertRow();
    const title = row.insertCell(0);
    const author = row.insertCell(1);
    const year = row.insertCell(2);
    const pages = row.insertCell(3);
    const read = row.insertCell(4);

    title.textContent = book.title;
    author.textContent = book.author;
    year.textContent = book.year;
    pages.textContent = book.pages;
    read.textContent = book.read;
  });
}

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
displayBooks();
