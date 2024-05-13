import { Data } from "./model/interfaceData";
import { adicionarProduto, listarProdutos, mediaPesoProdutos, mediaValoresProdutos, quantiaTotalItens, quantiaTotalProdutos, removerProduto, somarPesoProdutos, somarValoresProdutos } from "./controller/controllerEstoque";

const prompt = require('prompt-sync')({sigint: true});

function receber(userPrompt: string) {
  console.clear();
  return prompt(userPrompt).trim();
}

const menu: string = `
Para adicionar produto digite 1: 
Para remover produto digite 2: 
Para listar os produtos digite 3:
Para ver o valor total dos produtos digite 4: 
Para ver o peso total dos produtos digite 5: 
Para ver a média do valor dos produtos digite 6: 
Para ver a média do peso dos produtos digite 7: 
Para ver a quantidade total de itens no estoque digite 8: 
Para ver a quantidade total de produtos no estoque digite 9: 
Para sair digite 0: 
`

const main = async () => {
  const W = parseInt(receber(menu), 10);

  switch (W) {
    
    case 0:
      console.log("Volte sempre!");
      process.exit(0);

    case 1:
      var X = receber("Digite o nome do produto: ");
      var Y = receber("Digite o valor do produto: ");
      var Z = receber("Digite o peso do produto: ");
      var Q = receber("Digite a quantidade do produto: ");

      const dados = {
        nome: X,
        valor: Y,
        peso: Z,
        quantidade: Q
      } as Data

      await adicionarProduto(dados);
      break;
  
    case 2:
      var X = receber("Digite o nome do produto: ");
      
      // TO-DO mostrar informações do produto e confirmar com usuário

      await removerProduto(X);
      break;

    case 3:
      await listarProdutos();
      break;

    case 4:
      await somarValoresProdutos();
      break;

    case 5:
      await somarPesoProdutos();
      break;  

    case 6:
      await mediaValoresProdutos();
      break;

    case 7:
      await mediaPesoProdutos();
      break;

    case 8:
      await quantiaTotalItens();
      break;

    case 9:
      await quantiaTotalProdutos();
      break;

  }
};
  
main();