
// REGISTRO DAS COISAS
const lista_de_itens = [
  ['<img src=\'/aliens-ben-10/alien-x-lp.jpg\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>Alien-X</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/anfibio-lp.png\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>anfibio</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\"/aliens-ben-10/calafrio-lp.png\" class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>Calafrio</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/calafrio-supremo-lp.jpg\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>calafrio supremo</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/chamas-lp.png\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>Chamas</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/Cipo-selvagem-lp.png\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>Cipo-selvagem</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/diamante-lp.jpg\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>diamante</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/estrela-polar-lp.png\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>Estrla polar</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/feedback-lp.png\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>feedback</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/massa-cinzenta-lp.jpg\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>massa cinzenta</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/quatro-bracos-lp.jpg\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>quatro-bracos</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/xlr8-lp.png\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>XLR8</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
  ['<img src=\'/aliens-ben-10/mumia-lp.png\' class=\'imagem-ben-10\' >',
  '<h2 class=\'descricao-titulo\'>Mumia</h2>',
  '<p class=\'descricao\'>Alien X é a amostra de DNA do Omnitrix de um Sapien Celestial do Centro da Criação.</p>'
  ],
];

const elemento_lista = document.getElementById("lista");
const elemento_paginacao = document.getElementById("paginacao");

let pagina_atual = 1;
let linhas = 3;

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
