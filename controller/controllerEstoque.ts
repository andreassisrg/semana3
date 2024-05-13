import { Data } from "../model/interfaceData";
import { estoqueService } from "../service/serviceEstoque";

export async function adicionarProduto(data: Data) {
    try {
        await estoqueService.criar(data);
        console.log("Produto adicionado com sucesso");
    } catch (error) {
        console.log("Erro ao adicionar o produto", error);
    }
}

export async function removerProduto(nome: string) {
    try {
        await estoqueService.remover(nome);
        console.log(`Produto ${nome} removido com sucesso`);
    } catch (error) {
        console.log("Erro ao remover produto do estoque", error);
    }
}

export async function listarProdutos() {
    try {
        await estoqueService.listar();
    } catch (error) {
        console.log("Erro ao listar os produtos do estoque", error);
    }
}

export async function somarValoresProdutos() {
    try {
        const valorTotal = await estoqueService.somarValor();
        console.log(`O valor total dos produtos é ${valorTotal}`);
    } catch (error) {
        console.log("Error ao somar os valores dos produtos", error)
    }
}

export async function somarPesoProdutos() {
    try {
        const pesoTotal = await estoqueService.somarPeso();
        console.log(`O peso total dos produtos é ${pesoTotal}`);
    } catch (error) {
        console.log("Erro ao somar os valores dos produtos", error);
    }
}

export async function mediaValoresProdutos() {
    try {
        const media: number = await estoqueService.mediaValor();
        console.log(`A média dos valores dos produtos é ${media}`);
    } catch (error) {
        console.log("Erro ao calcular média dos valores dos produtos", error);
    }
}

export async function mediaPesoProdutos() {
    try {
        const peso: number = await estoqueService.mediaPeso();
        console.log(`A média do peso dos produtos é ${peso}`);
    } catch (error) {
        console.log("Erro ao calcular média do peso dos produtos", error);
    }
}

export async function quantiaTotalItens() {
    try {
        const itens: number = await estoqueService.itensTotal();
        console.log(`A quantia total de itens no inventário é ${itens}`);
    } catch (error) {
        console.log("Erro ao calcular quantia total de itens no inventário");
    }
}

export async function quantiaTotalProdutos() {
    try {
        const produtos: number = await estoqueService.produtosTotal();
        console.log(`A quantia total de produtos no inventário é ${produtos}`);
    } catch (error) {
        console.log("Erro ao calcular a quantia total de produtos no inventário");
    }
}