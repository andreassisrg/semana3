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
        let valorTotal = await estoqueService.somarValor();
        valorTotal = parseFloat(valorTotal.toFixed(2));
        console.log(`O valor total dos produtos é R$${valorTotal}`);
    } catch (error) {
        console.log("Error ao somar os valores dos produtos", error)
    }
}

export async function somarPesoProdutos() {
    try {
        let pesoTotal = await estoqueService.somarPeso();
        pesoTotal = parseFloat(pesoTotal.toFixed(2));
        console.log(`O peso total dos produtos é ${pesoTotal} kg`);
    } catch (error) {
        console.log("Erro ao somar os valores dos produtos", error);
    }
}

export async function mediaValoresProdutos() {
    try {
        let media: number = await estoqueService.mediaValor();
        media = parseFloat(media.toFixed(2));
        console.log(`A média dos valores dos produtos é R$${media}`);
    } catch (error) {
        console.log("Erro ao calcular média dos valores dos produtos", error);
    }
}

export async function mediaPesoProdutos() {
    try {
        let peso: number = await estoqueService.mediaPeso();
        peso = parseFloat(peso.toFixed(2));
        console.log(`A média do peso dos produtos é ${peso} kg `);
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