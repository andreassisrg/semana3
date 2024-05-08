interface Data {
    name: string;
    weight: string;
    value: string;
    amount: string;
}

import fs from 'fs';
import csv from 'csv-parser';

const readCSV = async (filePath: string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'name', title: 'Nome' },
      { id: 'weight', title: 'Peso' },
      { id: 'value', title: 'Valor' },
      { id: 'amount', title: 'Quantidade'}
    ],
  });

  return csvWriter.writeRecords(data);
};

const main = async () => {
    try {
      let data = await readCSV('db/estoque.csv');
      console.log('Dados lidos:', data);
      data = [ { name: 'teste', weight: 'teste', value: 'teste', amount: 'teste' } ]
      console.log(data);
      await writeCSV('db/estoque.csv', data);
      console.log('Dados escritos em output.csv');
    } catch (error) {
      console.error('Erro:', error);
    }
};
  
  main();