import { readCSV } from "../model/readCSV";
import { writeCSV } from "../model/writeCSV";
import { Data } from "../model/interfaceData";
import fs from "fs";

const filePath = "./model/estoque.csv"

export class estoqueService {
    static async criar(data: Data) {

        const nome = data.nome;
        const valor = parseFloat(data.valor);
        const peso = parseFloat(data.peso);
        const quantidade = parseFloat(data.quantidade);

        if (typeof nome !== 'string' || isNaN(valor) || isNaN(peso) || isNaN(quantidade)) {
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

    static async remover(nome: string) {
        const estoque = await readCSV(filePath);
        let novoEstoque: Data[] = [];
        let found: boolean = false;

        for (let i = 0; i < estoque.length; i++) {
            if (estoque[i].nome == nome) {
                found = true;
                continue;
            }
            novoEstoque.push(estoque[i]);
        }
        
        if (!found) {
            throw new Error("Produto não existe no estoque");
        } else {
            await writeCSV(filePath, novoEstoque);
        }
    }

    static async listar() {
        const estoque = await readCSV(filePath);
        
        for (let i = 0; i < estoque.length; i++) {
            console.log(`Nome: ${estoque[i].nome}, Valor: ${estoque[i].valor},
            Peso: ${estoque[i].peso}, Quantidade: ${estoque[i].quantidade}`);
        }
    }

    static async somarValor() {
        const estoque = await readCSV(filePath);

        let total: number  = 0;
        for (let i = 0; i < estoque.length; i++) {
            total += (parseFloat(estoque[i].valor) * parseInt(estoque[i].quantidade, 10));
        }

        return total;
    }

    static async somarPeso() {
        const estoque = await readCSV(filePath);

        let total: number = 0;
        for (let i = 0; i < estoque.length; i++) {
            total += (parseFloat(estoque[i].peso) * parseInt(estoque[i].quantidade));
        }

        return total;
    }

    static async mediaValor() {
        const estoque = await readCSV(filePath);

        let total: number  = 0;
        for (let i = 0; i < estoque.length; i++) {
            total += (parseFloat(estoque[i].valor) * parseInt(estoque[i].quantidade, 10));
        }

        return total / estoque.length;
    }

    static async mediaPeso() {
        const estoque = await readCSV(filePath);

        let total: number = 0;
        for (let i = 0; i < estoque.length; i++) {
            total += (parseFloat(estoque[i].peso) * parseInt(estoque[i].quantidade, 10));
        }

        return total / estoque.length;
    }

    static async itensTotal() {
        const estoque = await readCSV(filePath);

        let itens: number = 0;
        for (let i = 0; i < estoque.length; i++) {
            itens += parseInt(estoque[i].quantidade, 10);
        }

        return itens;
    }

    static async produtosTotal() {
        const estoque = await readCSV(filePath);
        return estoque.length;
    }
}