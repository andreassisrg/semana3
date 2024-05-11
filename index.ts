import { Data } from "../model/interfaceData";
import * from "/controller/controllerEstoque"

import * as readline from 'readline';
import { adicionarProduto } from "./controller/controllerEstoque";
const main = async () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdin
    });

    rl.question('Digite a opção desejada: ', (input: string) => {
      const valoresDoUsuario: string[] = input.split(' ');
      console.log(valoresDoUsuario)
      
      switch (W) {
        
        case 1:
          
          var X = receber("Digite o nome do produto: ");
          var Y = receber("Digite o valor do produto: ");
          var Z = receber("Digite o peso do produto: ");
          var Q = receber("Digite a quantidade do produto: ");

          const dados = {
            nome: X,
            valor: parseFloat(Y),
            peso: parseFloat(Z),
            quantidade: parseInt(Q, 10)
          } as Data

          await adicionarProduto(dados);
          break;
      }

      rl.close();
    });
};
  
  main();