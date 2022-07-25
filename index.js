class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class GridItem {
  addBookToGrid(book) {
    const grid = document.querySelector(".book-grid");
    const item = document.createElement("div");

    item.innerHTML = `<h1>${book.title}</h1><p>${book.author}</p><br><p>${book.isbn}</p><p><a href="" class="delete">X</a></p>`;
    item.classList.add("griditem");
    grid.appendChild(item);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
}

document.querySelector(".modal").addEventListener("submit", function (e) {
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const isbn = document.querySelector(".isbn").value;

  const book = new Book(title, author, isbn);
  const gridItem = new GridItem();

  gridItem.addBookToGrid(book);
  modalcont.classList.remove("show");
  //clears form
  document.querySelector(".title").value = "";
  document.querySelector(".author").value = "";
  document.querySelector(".isbn").value = "";

  e.preventDefault();
});
const addBook = document.querySelector(".addbook");

const modalcont = document.querySelector(".modal-container");

const exit = document.querySelector(".xbutton");

addBook.addEventListener("click", function () {
  modalcont.classList.add("show");
});

exit.addEventListener("click", function () {
  modalcont.classList.remove("show");
});



const x = document.querySelector(".book-grid");
const deletionconfirmcontainer = document.querySelector(".deletionconfirmcont");



//EL that brings up the delete confirmation 

x.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    deletionconfirmcontainer.classList.add("deletionconfirmshow");
  }

  if( yes == true){
    
  }

  e.preventDefault()
});

//EL that proceeds with deletion of book card


const yes = document.querySelector(".yes")
const no = document.querySelector(".no")

no.addEventListener('click', function(){
    deletionconfirmcontainer.classList.remove("deletionconfirmshow");

})



// target.parentElement.parentElement.remove()
 // item = new GridItem
  // item.deleteBook(e.target)