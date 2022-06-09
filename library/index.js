let myLibrary = [];
const contenedor = document.getElementById("contenedor");
const formularioLibro = document.getElementById("formulario");

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let autor = formData.get("newauthor");
    let titulo = formData.get("newtitle");
    let paginas = formData.get("newnumberpages");
    let readed = formData.get("leido-noleido");

    addBookToLibrary(titulo, autor, paginas, leido(readed));

    contenedor.innerHTML = "";
    myLibrary.map(
        (element, index)=>{
            const contenedorLibro = document.createElement("div");
            const libroTitulo = document.createElement("h3");
            const libroauthor = document.createElement("div");
            const libropages = document.createElement("div");
            const libroleido = document.createElement("div");
            contenedorLibro.setAttribute('data-key', index);
            contenedorLibro.classList.add("cardLibro");
            libroTitulo.textContent = element.title;
            libroauthor.textContent = element.author;
            libropages.textContent = element.pages;
            libroleido.textContent = retornarTextoLeido(element.read);
            contenedor.appendChild(contenedorLibro);
            contenedorLibro.appendChild(libroTitulo);
            contenedorLibro.appendChild(libroauthor);
            contenedorLibro.appendChild(libropages);
            contenedorLibro.appendChild(libroleido);
        }
    );


    formularioLibro.style.display = "none";
  });

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

    

function aparecerForm(){ 
       formularioLibro.style.display = "block";
       document.getElementById("newauthor").value = "";
       document.getElementById("newtitle").value = "";
       document.getElementById("newnumberpages").value = "";
       
}

function cancelarForm(){
    formularioLibro.style.display = "none";
}


function retornarTextoLeido(leido){
    if(leido){
        return "Ya has leido este libro";
    }else{
        return "aun no has leido el libro";
    }
}

function leido(leido){
    if(leido === "leido"){
        return true;
    }else{
        return false;
    }
}