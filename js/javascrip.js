let pley = document.getElementById("crear").innerHTML;
let guardo = document.getElementById("guardar").innerHTML;
let body = document.querySelector("body");
let caja = document.createElement("div");
let lista = document.createElement("ul");
//creo un dic en el body
body.appendChild(caja);
caja.appendChild(lista);
//creo una funcion para

function funcionCrearElementoALaLista() {
  let contenido = document.createElement("li");
  let texto = document.getElementById("texto").value;
  let textoCreado = document.createTextNode(texto);
  lista.appendChild(contenido);
  contenido.appendChild(textoCreado);
  console.log("nuevo item a la lista");
}

function guardarLista() {
  let caja2 = document.createElement("div");
  let lista2 = document.createElement("ul");
  body.appendChild(caja2);
  caja.appendChild(lista2);
  console.log("guardo lista");
}
pley.addEventListener("click", () => {
  funcionCrearElementoALaLista();
});

guardo.addEventListener("click", () => {
  guardarLista();
});
