import readCSV from "../model/readCSV";
import writeCSV from "..model/writeCSV";
import { Data } from "../model/interfaceData";
import fs from "fs";

const filePath = "./model/estoque.csv"

export class estoqueService {
    async criar(data: Data) {
        if (typeof data.nome !== 'string' || isNaN(data.valor) || isNaN(data.peso) || isNaN(data.quantidade)) {
            throw new Error("Dados inválidos para o produto");
        }

        const estoque = await readCSV(filePath);
        for (let i = 0; i < estoque.length; i++) {
            if (estoque[i].nome == data.nome) {
                throw new Error("Item já existe no estoque!");
            }
        }

        await writeCSV(filePath, [data]);
    }

    async remover(nome: string) {
        const estoque = await readCSV(filePath);
        let novoEstoque: Data[] = [];
        let found: boolean = false;

        for (let i = 0; i < estoque.length; i++) {
            if (estoque[i].nome == nome) {
                found = true;
                continue;
            }
            novoEstoque += estoque[i];
        }
        
        if (!found) {
            throw new Error("Produto não existe no estoque");
        } else {
            await writeCSV(filePath, novoEstoque);
        }
    }

    async listar() {
        const estoque = await readCSV(filePath);
        
        for (let i = 0; i < estoque.length; i++) {
            console.log(`Nome: ${estoque[i].nome}, Valor: ${estoque[i].valor},
            Peso: ${estoque[i].peso}, Quantidade: ${estoque[i].quantidade}`);
        }
    }
}