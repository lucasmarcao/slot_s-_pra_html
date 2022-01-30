var buscar = document.getElementById("buscar");
var adcionar = document.getElementById("adcionar");
var alterar = document.getElementById("alterar");
var listar = document.getElementById("listar");
var excluir = document.getElementById("excluir");
var salvar = document.getElementById("salvar");
var cancelar = document.getElementById("cancelar");
// valor dos botões.

// Valores de entrada || dados
var entradaId = document.getElementById("id");
var cargo = document.getElementById("cargo");
var nome = document.getElementById("nome");
var genero = document.getElementById("genero");
var salario = document.getElementById("salario");
var situacao = document.getElementById("situacao");


function mascaraId(n) {
  let c = n.value;

  if (isNaN(c[c.length - 1])) {
    // impede entrar outro caractere que não seja número
    n.value = c.substring(0, c.length - 1);
    return;
  }

  n.setAttribute("maxlength", "8");
}

function mascaraSalario(n) {
  let c = n.value;

  if (
    isNaN(c[c.length - 1]) &&
    "," != c[c.length - 1] &&
    "R" != c[c.length - 1] &&
    "$" != c[c.length - 1]
  ) {
    // impede entrar outro caractere que não seja número
    n.value = c.substring(0, c.length - 1);
    return;
  }

  n.setAttribute("maxlength", "15");
}

function saiDoSalario(n) {
  var c = n.value;

  if (c.length < 16) {
    n.value += " R$";
  }
}
