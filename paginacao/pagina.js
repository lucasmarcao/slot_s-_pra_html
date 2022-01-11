const lista_de_itens = [
  "ITEM 1",
  "ITEM 2",
  "ITEM 3",
  "ITEM 4",
  "ITEM 5",
  "ITEM 6",
  "reservei o  7 pra mim",
  "ITEM 8",
  "ITEM 9",
  "balaio de gato",
  "ITEM 11",
  "ITEM 12",
  "ITEM 13",
  "ITEM 14",
  "ITEM 15",
  "ITEM 16",
  "ITEM 17",
  "ITEM 18",
  "ITEM 19",
  "ITEM 20",
  "ITEM 21",
  "ITEM 22"
];

const elemento_lista = document.getElementById("lista");
const elemento_paginacao = document.getElementById("paginacao");

let pagina_atual = 1;
let linhas = 5;

function Exibicao_de_lista(itens, embrulo, linhas_por_pagina, pagina) {
  embrulo.innerHTML = "";
  pagina--;

  let comeco = linhas_por_pagina * pagina;
  let final = comeco + linhas_por_pagina;
  let itens_paginados = itens.slice(
    comeco,
    final
  );
  console.log(itens_paginados);
  for (let i = 0; i < itens_paginados.length; i++) {
    let item = itens_paginados[i];
    let elemento_do_item = document.createElement('div');
    elemento_do_item.classList.add('item');
    elemento_do_item.innerHTML = item;
    console.log(item);

    embrulo.appendChild(elemento_do_item);

  }
  console.log(itens_paginados)
}

function Circulando_pelas_paginas(itens, embrulo, linhas_por_pagina) {
  embrulo.innerHTML = "";

  let contador_de_paginas = Math.ceil(itens.length / linhas_por_pagina )+1;
  for (let i = 1;i<contador_de_paginas;i++) {
    let criaBotao = BotaoDePaginacao(i,itens);
    embrulo.appendChild(criaBotao)
  }
}

function BotaoDePaginacao(pagina,itens) {
  let botao = document.createElement('button');
  botao.innerHTML = pagina;
  
  if (pagina_atual==pagina) botao.classList.add('active');
  
  botao.addEventListener('click', function(){
    pagina_atual = pagina;
    Exibicao_de_lista(itens,elemento_lista, linhas, pagina_atual);

    let botao_atual = document.querySelector('.paginacao button.active');
    botao_atual.classList.remove('active');
    botao.classList.add('active');
  });

  return botao;
}

Exibicao_de_lista(lista_de_itens, elemento_lista, linhas, pagina_atual);
Circulando_pelas_paginas(lista_de_itens,elemento_paginacao,linhas);
