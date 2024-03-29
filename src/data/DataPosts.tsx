const dataPosts = [
  {
    id: 0,
    title: "Sistema de leitor - CRUD",
    description:
      "É uma aplicação para java na qual foi montada no modelo MVC. Ao executar o projeto, ele abre uma interface gráfica construida em java na qual você pode fazer iserções, consultas, listagens, updates, e entre outros dos leitores.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/leitor.png",
    video: null,
    github: "https://github.com/KaiqueBM/Sistema-Leitor-CRUD",
    project: null,
    tags: [
      {
        name: "Java",
      },
      {
        name: "MySql",
      },
      {
        name: "MVC",
      },
    ],
  },
  {
    id: 1,
    title: "Mural de notas",
    description:
      "É uma aplicação web que serve de mural de notas. Basicamente, você tem uma página principal com um formulário na qual você pode usar colocar um título e uma descrição para uma nota e adicionar na tela. Em baixo, tem todas as notas adicionadas. O projeto ele tem integração entre o back-end e o front-end para o processamento das requisições, além de ser responsivo e tem armazenamento localstorage.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/mural.png",
    video: "https://www.youtube.com/embed/pbH3vCsswhY",
    github: "https://github.com/KaiqueBM/Mural-De-Notas",
    project: null,
    tags: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JS",
      },
      {
        name: "Node.js",
      },
    ],
  },
  {
    id: 2,
    title: "Sitema de chamada",
    description:
      "É uma aplicação mobile que funciona como uma chamada de aula. A primeira activity é para fazer um login, aonde você coloca o seu RA e a sua senha. Após fazer o login mostra os dados do aluno, como horário que fez login, nome, ra e a localização atual (lat e long). Com base nesses dados, ele vai ver se o aluno tem aula nesse dia. Caso tenha, se estiver dentro do horário da aula e na localização da sala, ele permite você registrar a presença, caso contrário aparece uma mensagem dizendo que você hoje não tem aula ou algo do gênero. É possível também consultar as matérias que você tem na sua grade.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/chamada.png",
    video: null,
    github: "https://github.com/KaiqueBM/Sistema-De-Chamada-De-Sala",
    project: null,
    tags: [
      {
        name: "Kotlin",
      },
      {
        name: "Android Studio",
      },
      {
        name: "SqLite",
      },
    ],
  },

  {
    id: 4,
    title: "NLW - Ecoleta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tellus at diam.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/ecoleta.png",
    video: null,
    github: null,
    project: null,
    tags: [
      {
        name: "Node.js",
      },
      {
        name: "React",
      },
      {
        name: "React Native",
      },
    ],
  },
  {
    id: 5,
    title: "Monte seu hamburger",
    description:
      "Essa aplicação foi feito durante um curso colocando em prática os conceitos aprendidos de Vue.js. É um sistema crud basicamente, você consegue montar seu pedido e gerenciar todos os pedidos em uma outra página.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/burger.png",
    video: "https://www.youtube.com/embed/m6bqryWxF1M",
    github: "https://github.com/KaiqueBM/Make-Your-Burger",
    project: null,
    tags: [
      {
        name: "Vue.js",
      },
      {
        name: "CSS",
      },
      {
        name: "JS",
      },
    ],
  },
  {
    id: 6,
    title: "Ferragens Piratininga",
    description:
      "Foi desenvolvido um site em Wordpress para a empresa Ferragens Piratininga, utilizando bastante PHP e Javascript. Como eles vendem produtos, todo o script teve que ser feito em torno do plugin WooCommerce.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/ferragens.png",
    video: null,
    github: null,
    project: "http://www.ferragenspiratininga.com.br/",
    tags: [
      {
        name: "JS",
      },
      {
        name: "PHP",
      },
      {
        name: "WP",
      },
      {
        name: "WooCommerce",
      },
    ],
  },

  {
    id: 20,
    title: "Mundo de Maria",
    description:
      "Foi desenvolvido um site em Wordpress para a loja Mundo de Maria, utilizando bastante PHP, elementor e um pouco de Javascript. Como eles vendem produtos, todo o script teve que ser feito em torno do plugin WooCommerce.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/mundodemaria.png",
    video: null,
    github: null,
    project: "https://mundodemaria.store/",
    tags: [
      {
        name: "JS",
      },
      {
        name: "PHP",
      },
      {
        name: "WP",
      },
      {
        name: "WooCommerce",
      },
    ],
  },
  {
    id: 13,
    title: "Yappi",
    description:
      "Aplicação criada para a empresa Yappi. Foi feito em Wordpress utilizando HTML, CSS, Javascript, PHP, Bootstrap, jQuery e Ajax. Além do blog, foi desenvolvido uma calculadora de juros composto, precisando criar um back end interno no WP, utilizando o Ajax para realizar a chamada.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/yappi.png",
    video: "https://www.youtube.com/embed/GfNgF_zNnb0",
    github: null,
    project: "https://yappi.com.br/",
    tags: [
      {
        name: "JS",
      },
      {
        name: "PHP",
      },
      {
        name: "Ajax",
      },
      {
        name: "WP",
      },
    ],
  },

  {
    id: 21,
    title: "NB Comércio",
    description:
      "Aplicação criada para a empresa NB Comércio. Foi feito em Wordpress utilizando HTML, CSS, Javascript, PHP, Bootstrap e Jquery.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/nbcomercio.png",
    video: null,
    github: null,
    project: "https://nbcomercio.com.br/",
    tags: [
      {
        name: "JS",
      },
      {
        name: "PHP",
      },
      {
        name: "WP",
      },
    ],
  },

  {
    id: 20,
    title: "Empreendimentos Anima",
    description:
      "Aplicação criada para a empresa Empreendimentos Anima. Foi feito em Wordpress utilizando HTML, CSS, Javascript, PHP, Bootstrap e Jquery.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/anima.png",
    video: null,
    github: null,
    project: "https://empreendimentosanima.com.br/",
    tags: [
      {
        name: "JS",
      },
      {
        name: "PHP",
      },
      {
        name: "WP",
      },
    ],
  },

  {
    id: 3,
    title: "Valorant - Database",
    description:
      "Essa aplicação foi construida em React utilizando Typescript e Tailwind, além do Axios para fazer a conexão com a API da database do Valorant, mostrando assim todos os cosméticos e coleções do jogo além dos mapas. Pode também consultar todas as informações dos agentes do jogo.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/valorant.png",
    video: "https://www.youtube.com/embed/mEiXPhmVFvc",
    github: "https://github.com/KaiqueBM/valorant_database_items",
    project: "https://valorant-database.netlify.app/",
    tags: [
      {
        name: "React",
      },
      {
        name: "TS",
      },
      {
        name: "Axios",
      },
      {
        name: "Tailwind",
      },
    ],
  },
  {
    id: 7,
    title: "Clima do tempo",
    description:
      "Essa aplicação foi desenvolvida baseada no #BoraCodar da Rocketseat. Fora alguns ajustes responsivos, consumi duas APIs para alimentar o projeto, um em relação a previsão do tempo e outra da qualidade do ar. Além disso fiz um scriptizinho de Geolocalização onde o usuário pode permitir pegar a localização dele para retornar o clima naquela região. O app muda também a cor de acordo com o horário do dia.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/clima.png",
    video: null,
    github: "https://github.com/KaiqueBM/Clima-em-React",
    project: "https://clima-do-tempo.netlify.app/",
    tags: [
      {
        name: "React",
      },
      {
        name: "JS",
      },
      {
        name: "Axios",
      },
    ],
  },
  {
    id: 8,
    title: "Loja do Fortnite",
    description:
      "Essa aplicação foi desenvolvida consumindo a API da loja de itens do Fortnite. Basicamente é atualizado em tempo real com base na loja do jogo, mostrando todos os itens, bundles, com todos os detalhes. Consegue ver informações de preço, desconto, raridade, descrição e entre outras.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/fortnite.png",
    video: "https://www.youtube.com/embed/mdTjP9HbIG4",
    github: "https://github.com/KaiqueBM/fortnite_shop",
    project: "https://fortnite-shop.netlify.app/",
    tags: [
      {
        name: "React",
      },
      {
        name: "TS",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Axios",
      },
    ],
  },
  {
    id: 9,
    title: "NLW SETUP - Habits",
    description:
      "Essa aplicação foi desenvolvida durante a NLW SETUP realizada pela Rockseat. É um controle de hábitos, você pode registrar todo os dias se você realizado um determinado hábito ou até adicionar um novo hábito à sua rotina. Foi feito a parte do back-end, do banco de dados e do front-end.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/habitos.png",
    video: "https://www.youtube.com/embed/Hq9LD9CzNJM",
    github: "https://github.com/KaiqueBM/nlw-setup",
    project: null,
    tags: [
      {
        name: "React",
      },
      {
        name: "TS",
      },
      {
        name: "Node.js",
      },
      {
        name: "Prisma",
      },
    ],
  },
  {
    id: 10,
    title: "FPVD",
    description:
      "Foi desenvolvido um site para a Federação Paulista de Voleibol para deficientes utilizando Wordpress, PHP e Javascript. Consegue ver as notícias mais recentes, todas as informações sobre a Federação, ver os clubes que participam da liga, os árbitros e até os projetos incetivados.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/fpvd.png",
    video: "https://www.youtube.com/embed/t_MKLTLmM7U",
    github: null,
    project: null,
    tags: [
      {
        name: "JS",
      },
      {
        name: "PHP",
      },
      {
        name: "WP",
      },
    ],
  },
  {
    id: 11,
    title: "NLW Spacetime - Cápsula do tempo",
    description:
      "Essa aplicação foi desenvolvida durante a NLW SPACETIME realizada pela Rockseat. Foi utilizado Next.js, typescript, tailwind, node.js, fastify, axios e React Native. É uma aplicação na qual você loga com o seu github e consegue fazer publicações de lembranças, sendo textos, imagens ou até videos. Há também uma opção para deixar a publicação pública, caso contrário, só você conseguirá visualizar a sua publicação.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/spacetime.png",
    video: null,
    github: "https://github.com/KaiqueBM/nlw-spacetime",
    project: null,
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "React Native",
      },
    ],
  },
  {
    id: 12,
    title: "Catálogo de filmes",
    description:
      "Desenvolvi uma aplicação web de um catálogo de filmes onde você pode ver os filmes mais populares do momento, filtrar por gêneros, pesquisar um filme especifico e entre outras funções. Consumi a api da The Movies DB, uma api bem completa para o que eu queria fazer. Utilizei nesse projeto React, Typescript e Tailwind. A listagem dos filmes é por sua popularidade atualmente. Fiz um esquema de paginação, mostrando 20 filmes por página. Você pode também filtrar pelos gêneros, listando apenas filmes de ação, comédio, e entre outros. Também tem a opção de pesquisar por um filme especifico, podendo até pesquisar por um filme que ainda não lançou. E para finalizar, pode mudar a linguagem do site por meio de um botão na nav.",
    image:
      "https://raw.githubusercontent.com/KaiqueBM/kaique-portfolio/master/assets/filmes.png",
    video: "https://www.youtube.com/embed/oS-VuN9uDG0",
    github: "https://github.com/KaiqueBM/catalogo-de-filmes",
    project: "https://catalogo-de-filmes-kaique.netlify.app/",
    tags: [
      {
        name: "React",
      },
      {
        name: "TS",
      },
      {
        name: "Tailwind",
      },
    ],
  },
];

export const data = dataPosts.reverse();
