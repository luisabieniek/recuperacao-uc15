const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

pesquisa.addEventListener("keyup", () => {

const valor = pesquisa.value.toLowerCase();

document
.querySelectorAll(".card-evento")
.forEach(card => {

const texto = card.textContent.toLowerCase();

card.style.display =
texto.includes(valor)
? "block"
: "none";

});

});

}

document
.querySelectorAll(".favorito")
.forEach(botao => {

botao.addEventListener("click", () => {

const evento =
botao.dataset.evento;

localStorage.setItem(
"eventoFavorito",
evento
);

alert("Favorito salvo!");

});

});

const form =
document.getElementById("formContato");

if(form){

form.addEventListener("submit", e => {

e.preventDefault();

const nome =
document.getElementById("nome").value;

const email =
document.getElementById("email").value;

const mensagem =
document.getElementById("mensagem").value;

const status =
document.getElementById("status");

if(
!nome ||
!email ||
!mensagem
){

status.textContent =
"Preencha todos os campos.";

status.style.color = "red";

return;

}

status.textContent =
"Mensagem enviada com sucesso.";

status.style.color = "green";

form.reset();

});

}

$(document).ready(function(){

$("footer").append(
'<button id="voltarTopo">↑ Topo</button>'
);

$("#voltarTopo").click(function(){

$("html,body").animate(
{
scrollTop:0
},
500
);

});

});