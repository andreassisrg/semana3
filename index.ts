const addItemNoEstoque = async (name: string, weight: string, value: string, amount: string) : Promise<void> => {
  const produtosDoEstoque = await readCSV('db/estoque.csv');

  // Checa se o item ja existe no estoque
  for (let i = 0; i < produtosDoEstoque.length; i++) {
    if (produtosDoEstoque[i].name == name) {
      console.log("Item já existe no estoque!");
      return;
    }
  }

  // Se o item nao existir no estoque, executará o seguinte código:
  const novosItems: Data[] = [ { name: name, weight: weight, value: value, amount: amount } ];
  await writeCSV('db/estoque.csv', novosItems);
}

import * as readline from 'readline';
const main = async () => {
    try {
      const data = await readCSV('db/estoque.csv');
      console.log('Dados lidos:', data);
      //data = [ { name: 'teste', weight: 'teste', value: 'teste', amount: 'teste' } ]
      console.log(data);
      await writeCSV('db/estoque.csv', data);
      console.log('Dados escritos em output.csv');
    } catch (error) {
      console.error('Erro:', error);
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdin
    });

    rl.question('Qual opção?', (input: string) => {
      const valoresDoUsuario: string[] = input.split(' ');
      console.log(valoresDoUsuario)
      switch (valoresDoUsuario[0]) {
        case 'a':
          if (valoresDoUsuario.length != 5) {
            console.log("Quantidade inválida de parâmetros!");
          } else {
            addItemNoEstoque(valoresDoUsuario[1], valoresDoUsuario[2], valoresDoUsuario[3], valoresDoUsuario[4]);
          }
          break;
        case 'r':
          break;
        default:
          console.log("Escolha inválida!");
      }

      rl.close();
    });
};
  
  main();