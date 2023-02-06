let myLibrary = ["The Hobbit", "The Thing", "A Clockwork Orange"];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
  const tableBody = document.getElementById("table-body");

  myLibrary.forEach((book) => {
    const newRow = document.createElement("tr");
    const newColumn = document.createElement("td");
    newColumn.textContent = book;
    tableBody.appendChild(newRow);
    newRow.appendChild(newColumn);
  });
}

displayBooks();
