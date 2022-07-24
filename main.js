
//CLASSES

class Book {
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
  

}

class Ui {
    addBookToList(book) {
        const list = document.querySelector('.book-grid')
        const item = document.createElement('div')
        
       
        
        item.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="" class="delete">X</a></td>`;

        list.appendChild(item)
    }

    deleteBook(target) {
        if(target.className === "delete") {
            target.parentElement.parentElement.remove()
        }
    }
    
}

function clearFields(){
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
     document.querySelector("#isbn").value = ""
}

// ADD BOOK EVENT LISTENER
document.querySelector(".modal").addEventListener('submit', (e) =>{

    e.preventDefault()

    const title = document.querySelector(".title").value
    const author = document.querySelector(".author").value
    const isbn = document.querySelector(".isbn").value

    const book = new Book(title, author, isbn)
    
    const ui =  new Ui()


        if(title === "" || author === "" || isbn  === ""){
            alert("All fields must be filled out")
        }else{
    ui.addBookToList(book)
    clearFields()
}


    
})

//REMOVE BOOK EVENT LISTENER
document.querySelector('.modal').addEventListener('click', function(e){
    
   
    const ui = new Ui()

    ui.deleteBook(e.target)

    e.preventDefault()
})










const addBook = document.querySelector(".addbook")

const modalcont = document.querySelector(".modal-container")


addBook.addEventListener('click', function(){
    modalcont.classList.add('show')
})

