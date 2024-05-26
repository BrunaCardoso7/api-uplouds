import Restaurante from "../model/restauranteModel.js";
import Produto from "../model/produtoModel.js";

export async function createProdutoService(nome, preco, imagem, user_id) {
    try {
       
        const restaurante = await Restaurante.findByPk(user_id);
        if (!restaurante) {
            throw new Error('Restaurante não encontrado');
        }

        
        const produto = await Produto.create({
            nome: nome,
            preco: preco,
            imagem: imagem,
            rest_id: user_id 
        });

        return produto;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
export async function getAllProdutos () {
    try {
        const produtos = await Produto.findAll()

        return produtos
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
export async function UpdateProdutosService (id, nome, preco, imagem) {
    try {
        console.log(nome, id, preco, imagem)
        const produto = await Produto.findByPk(id)

        if(!produto) {
            console.log('produto não encontrados')
        }

        const updateFields = {}
        if (nome !== undefined) updateFields.nome = nome;
        if (preco !== undefined) updateFields.preco = preco;
        if (imagem !== undefined) updateFields.imagem = imagem;

        Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key])

        await produto.update(updateFields);

        console.log('produto atualizado com sucesso');

        return produto
    } catch (error) {
        console.error(error);
        throw error; 
    }
}


export async function DeleteProdutoService(id) {
    try {
        const finddedProduto = await Produto.findByPk(id)

        if (!finddedProduto) {
            throw new Error('Produto not found');
        }

        await finddedProduto.destroy()

        return finddedProduto;
    } catch (error) {
        console.error(error)
    }
}