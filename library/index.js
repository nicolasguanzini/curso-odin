let myLibrary = [];
const contenedor = document.getElementById("contenedor");

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function(){
            if(this.read){
                return `${this.title} by ${this.author}, ${this.pages} pages, already readed`;
            }else{
                return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
            }
            
        }
    }

    function addBookToLibrary(title, author, pages, read) {
        let libro = new Book(title, author, pages, read);
        myLibrary.push(libro);
    }

    addBookToLibrary("Nicolas", "Guanzini", "25", false);
    addBookToLibrary("Aldana", "Guanzini", "23", false);

    myLibrary.map(
        (element)=>{
            const contenedorLibro = document.createElement("div");
            const libroTitulo = document.createElement("h3");
            const libroauthor = document.createElement("div");
            const libropages = document.createElement("div");
            libroTitulo.textContent = element.title;
            libroauthor.textContent = element.author;
            libropages.textContent = element.pages;
            contenedor.appendChild(contenedorLibro);
            contenedorLibro.appendChild(libroTitulo);
            contenedorLibro.appendChild(libroauthor);
            contenedorLibro.appendChild(libropages);
        }
    );