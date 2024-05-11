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
    append: true,
    alwaysQuote: true
  });

  return csvWriter.writeRecords(data);
};