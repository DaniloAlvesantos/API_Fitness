const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/exe", function (req, res) {
  res.json([
    {
      id: "1",
      img: "https://i.ibb.co/Q8x6PZ4/polichinelo-exercicio.jpg",
      nome: "Polichinelo",
      nivel: "Fácil",
      modo: [
        "Inicie com seus pés juntos e seus braços ao lado do corpo.",
        "Em seguida, salte distanciando os pés e movendo suas mãos sobre a cabeça.Retorne para a posição inicial e, em seguida, repita o movimento",
      ],
      info: "Esse exercício fornece um treino para o corpo inteiro trabalhar todos os seus grandes grupos musculares.",
    },
    {
      id: "2",
      img: "https://i.ibb.co/brFHL5d/abdominais.jpg",
      nome: "Abdominais",
      nivel: "Fácil",
      modo: [
        "Deite de costas com os joelhos dobrados e os braços esticados para frente.",
        "Levante a parte superior do corpo tirando-a do chão. Mantenha-a erguida por alguns segundos e retorne lentamente",
      ],
      info: "Esse exercício trabalha principalmente o músculo reto abdominal e os oblíquos.",
    },
    {
      id: "3",
      img: "https://i.ibb.co/hCfpZ11/abdominais-pernas.webp",
      nome: "Abdominais Pernas",
      nivel: "Médio",
      modo: [
        "Deite-se de costas e coloque as mãos por baixo das ancas como apoio.",
        "Em seguida, levante as pernas a direito até formar um ângulo recto com o chão.",
        "Baixa as pernas lentamente e repita o exercício.",
      ],
      info: "Esse exercício treina pernas, abdômen.",
    },
    {
      id: "4",
      img: "https://i.ibb.co/QrwZvkV/prancha.png",
      nome: "Prancha",
      nivel: "Médio",
      modo: [
        "Mantenha a posição de flexão com o peso do corpo sustentado pelos antebraços, cotovelos e dedos do pés.",
      ],
      info: "A prancha fortalece os abdominais, as costas e os ombros.",
    },
    {
      id: "5",
      img: "https://i.ibb.co/sbLRcgH/montanha.jpg",
      nome: "Montanha",
      nivel: "Fácil",
      modo: [
        "Comece com a posição de flexão, leve o joelho direito na direção do peito, salte ao trocar de pé no ar trazendo o pé esquerdo para dentro e o direito para fora.",
      ],
      info: "Este exercício fortalece vários grupos musculares além do sistema cardiovascular.",
    },
  ]);
});

app.get("/cards", function (req, res) {
  res.json([
    {
      id: "1",
      img: "https://i.ibb.co/F6Z94xg/brownie-de-chocolate-com-nozes.jpg",
      nome: "BROWNIE DE CHOCOLATE COM NOZES E PEDAÇOS DE Chocolate Branco",
      info: "Medio",
      m: "40min",
      n: [
        "1 barra de chocolate meio amargo 180 gramas, ",
        "120 gramas de manteiga de leite, ",
        "1/2 xícara + 2 colheres de sopa de açúcar, ",
        "3 ovos, ",
        "1/2 xícara de farinha de trigo, ",
        "3 colheres de sopa bem cheias de cacau em pó, ",
        "1 pitada de sal, ",
        "nozes o quanto baste e ao seu gosto, ",
        "1 barra de chocolate branco 180 gramas picada.",
      ],
      p: [
        "Derreta o chocolate meio amargo em banho maria. Derreta também a manteiga, separada do chocolate. Junte os dois, ligue a batedeira devagar e vá acrescentando os outros ingredientes. A massa ficará brilhante e grossa. Triture as nozes picando em pedacinhos antes e pique o chocolate branco em pedacinhos também. Misture na massa com a ajuda de uma espátula. Forre um tabuleiro quadrado e médio com papel manteiga ou papel alumínio e coloque a massa, espalhando bem. Leve ao forno baixo pré-aquecido 180 graus e deixe por +ou- 30 minutos. Não deixe demais no forno, senão ela perde aquele aspecto molhadinho que deve ter. Espere esfriar e corte em quadradinhos. Se quiser servir quente, você pode servir com sorvete.",
      ],
    },
    {
      id: "2",
      img: "https://i.ibb.co/LPcx2P9/bolo-de-fuba.jpg",
      nome: "Bolo de caneca fit de fubá com coco",
      info: "Fácil",
      m: "5min",
      n: [
        "1 ovo, ",
        "2 colheres de sopa de leite, ",
        "1 colher de sopa de farinha de castanhas (ou amêndoas), ",
        "2 colheres de sopa de fubá peneirado, ",
        "1 colher de sopa de coco ralado sem açúcar, ",
        "1 colher de sobremesa de açúcar demerara ou outro de sua preferência, ",
        "1 colher de chá de vinagre de maçã, ",
        "1 colher de chá de fermento em pó Canela em pó para decorar.",
      ],
      p: [
        "Em uma caneca, misture todos os ingredientes, exceto a canela, até formar uma homogênea.Se desejar, decore polvilhando canela por cima.Leve para o micro-ondas em potência alta por cerca de 1 minuto e 30 segundos.Agora é só servir. Bom apetite.",
      ],
    },
    {
      id: "3",
      img: "https://i.ibb.co/MPM7t9v/Smoothie-de-banana-e-frutas-vermelhas.jpg",
      nome: "Smoothie de banana e frutas vermelhas",
      info: "Fácil",
      m: "5min",
      n: [
        "2 bananas bem maduras (prata, nanica ou banana maçã), ",
        "4 morangos, ",
        "4 framboesas, ",
        "20 mirtilos, ",
        "4 amoras grandes, ",
        "100ml de água Mel a gosto (opcional).",
      ],
      p: [
        "Descasque as bananas, pique elas e, com as outras frutas, deixe congelar de um dia para o outro.Em um liquidificador ou mixer, adicione todos os ingredientes e bata até ficar homogêneo (reservealgumas para enfeitar).Caso queira deixar mais doce, adicione o mel na hora de bater.Agora é só servir. Bom apetite.",
      ],
    },
    {
      id: "4",
      img: "https://i.ibb.co/QK2WkXq/panqueca-de-aveia.jpg",
      nome: "Panqueca de aveia",
      m: "10min",
      info: "Fácil",
      n: [
        "1 xícara de aveia em flocos finos ou farinha de aveia, ",
        "1 xícara de água, ",
        "2 colheres de sopa de melado, ",
        "1 colher de sopa de farinha de linhaça, ",
        "1 colher de chá de fermento químico em pó.",
      ],
      p: [
        "Coloque todos os ingredientes no liquidificador, com exceção do fermento, e bata até ficar homogêneo. Se você estiver usando farinha de aveia, pode misturar todos os ingredientes manualmenteAcrescente o fermento por último e misture delicadamenteAqueça uma frigideira antiaderente em fogo baixo. Espalhe um pouco da massa e tampe para abafar e já começar a assar o outro ladoVerifique se está bem assada e vire para assar o outro lado até dourar. Tampe novamente para abafarRepita o processo até terminar a massaSirva com o acompanhamento de sua preferência (mel, frutas, geleias, castanhas)",
      ],
    },
    {
      id: "5",
      img: "https://i.ibb.co/4YvBcR8/p-o-de-microondas.jpg",
      nome: "Pão integral de microondas",
      info: "Fácil",
      m: "6min",
      n: [
        "1 ovo (pode ser apenas a clara), ",
        "1 colher de sopa de farelo de aveia (pode trocar por outra farinha), ",
        "1 colher de sopa de iogurte desnatado, ou 1 colher de sopa de água, ",
        "1 colher de sobremesa de fermento para bolo, em pó Fique á vontade para adicionar ervas secas ou sementes.",
      ],
      p: [
        "Junte todos os ingredientes em uma vasilha e misture-os bem Em seguida, coloque a massa em uma pequena travessa Leve ao microondas na potência alta por cerca de 2 minutos e 20 segundos Depois de pronto, você pode cortar ao meio e dourar na frigideira ou grill",
      ],
    },
    {
      id: "6",
      img: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-iogurte-com-macas-01-730x730.jpg",
      nome: "Bolo de iogurte com maçãs",
      info: "Fácil",
      m: "50min",
      n: [
        "2 xícaras de chá de farinha de trigo, ",
        "1 colher de sopa de fermento em pó químico, ",
        "1 pitada de sal, ",
        "2 maçãs verdes, ",
        "Suco de 1 limão pequeno, ",
        "3 ovos, ",
        "1 xícara de chá de iogurte natural, ",
        "1 xícara de chá de óleo (canola, milho ou girassol), ",
        "1 e ½ xícara de chá de açúcar, ",
        "1 colher de café de canela, ",
        "1 colher de chá de essência de baunilha.",
      ],
      p: [
        "Em um recipiente grande, peneire a farinha, o fermento, o sal e reserve.Em outro recipiente, rale as maçãs, coloque o suco de limão, misture e reserve.Em um liquidificador, adicione os ovos, o iogurte, o óleo, o açúcar, a canela, a baunilbata.Junte essa mistura com os secos e misture bem.Acrescente a maçã ralada, misture para incorporar bem.Transfira para uma forma (24cm de diâmetro) untada, enfarinhada e leve ao forno preaqueci180º graus até dourar e quando você colocar um palito, ele sair seco.Agora é só servir. Bom apetite.",
      ],
    },
    {
      id: "7",
      img: "https://i.ibb.co/sP1GW02/Couve-flor-assada.jpg",
      nome: "Couve-flor assada com iogurte e especiarias",
      info: "Fácil",
      m: "50min",
      n: [
        "1 couve-flor, ",
        "1/2 xícara de iogurte integral, ",
        "1 colher de chá de sal, ",
        "Páprica a gosto, ",
        "Cominho a gosto, ",
        "Cúrcuma a gosto.",
      ],
      p: [
        "Lave bem a couve flor e deixe secar.Em uma vasilha, coloque o iogurte, o sal, as especiarias e misture tudo muito bem.Passe a couve-flor nessa mistura e acomode em uma assadeira.Leve para assar em forno preaquecido a 200 °C por cinquenta minutos.",
      ],
    },
    {
      id: "8",
      img: "https://i.ibb.co/JxGQkDR/danoninho.jpg",
      nome: "Danoninho saudável",
      info: "Fácil",
      m: "5min",
      n: [
        "170 gramas de iogurte natural, ",
        "1 banana congelada, ",
        "6 morangos congelados, ",
        "2 colheres de sopa de leite de coco em pó (ou outro leite que você preferir).",
      ],
      p: [
        "Em um liquidificador, adicione todos os ingredientes e bata até ficar homogêneo.Transfira para um recipiente grande e leve para a geladeira para gelar.Agora é só servir. Bom apetite.",
      ],
    },
  ]);
});

app.get("/", function (req, res) {
  const mensage = ["Home", "Cards are /cards", "Exercise are /exe"];
  res.send(mensage);
});

app.listen(port, () => {
  console.info(`Aplicação está rodando na porta https:${port}`);
});
