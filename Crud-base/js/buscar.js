function buscarBotao() {
  if (
    entradaId.value == "6" ||
    entradaId.value == "1" ||
    entradaId.value == "2" ||
    entradaId.value == "3" ||
    entradaId.value == "4" ||
    entradaId.value == "5"
  ) {
    console.log('Usuário cadastrado. -> atualize'); 
    adcionar.style.display = "none"; // botão ADCIONAR some
    alterar.style.display = "inline"; // botão Alterar aparece
    excluir.style.display = "inline" // botão excluir aparece
  } else {
    console.log('Usuário não cadastrado. -> adcione');
    adcionar.style.display = "inline"; // botão ADCIONAR aparece
    alterar.style.display = "none"; // botão Alterar some
    excluir.style.display = "none" // botão excluir some
  }
}