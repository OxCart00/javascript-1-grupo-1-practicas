//1. Crear tres elementos del dom con clase y id.
const titulo = document.createElement("h1");
titulo.id = "primero";
titulo.className = "titulo-principal";
titulo.style = ("color: red");

const div = document.createElement("h2");
div.id = "segundo";
div.className = "contenido";
div.style = ("color: green");

const parrafo = document.createElement("p");
parrafo.id = "tercero";
parrafo.className = "texto";
parrafo.style = ("color: darkviolet");

document.body.appendChild(titulo);
document.body.appendChild(div);
document.body.appendChild(parrafo);

//2. Escribir tres maneras de accederlos por clase, id y selector.
const clases = document.getElementsByClassName("texto");

for (let i = 0; i < clases.length; i++) {
  clases[i].innerHTML = "Texto modificado por js, por medio del classSelector";
}

document.getElementById("primero").innerHTML = "Titulo agregado por js al: html, por medio del IdSelector";

document.querySelector("h2").innerHTML = "Titulo seleccionado por medio del querySelector";

//3. Crear un elemento nuevo con texto.
const elemento_texto = document.createElement("span");

elemento_texto.textContent = "Elemento de texto creado con js";

document.body.appendChild(elemento_texto);

//4. Remover la clase de un elemento y agregarle una clase nueva.

titulo.classList.remove("titulo-principal");
titulo.classList.add("clase-creada-por-js");