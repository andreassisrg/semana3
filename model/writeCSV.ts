import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from "./interfaceData";

export const writeCSV = async (filePath: string, data: Data[], justAppend: boolean = true): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'nome' },
      { id: 'peso', title: 'peso' },
      { id: 'valor', title: 'valor' },
      { id: 'quantidade', title: 'quantidade'}
    ],
    append: justAppend,
    alwaysQuote: true
  });

  return csvWriter.writeRecords(data);
};