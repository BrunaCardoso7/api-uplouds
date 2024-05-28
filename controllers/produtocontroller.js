import { DeleteProdutoService, UpdateProdutosService, createProdutoService, getAllProdutos } from "../service/produtoService.js"

export async function createProduto(req, res) {
    try {
        const { nome, preco } = req.body;
        const imagem = req.file ? req.file.path : undefined;
        const rest_id = req.query.rest_id; 

        if (!nome || !preco || !imagem || !rest_id) {
            console.log(nome, preco, imagem, rest_id);
            return res.status(400).send({ msg: 'Falta dados' });
        }

        const produto = await createProdutoService(nome, preco, imagem, rest_id);

        return res.status(200).send(produto);
    } catch (error) {
        console.error(error); 
        return res.status(500).send({ msg: "Algo deu errado na sua requisição", error });
    }
}
export async function getProdutos (req, res) {
    try {
        
        const produtos = await getAllProdutos()

        return res.status(200).send({produtos})
    } catch (error) {
        console.error(error); 
        return res.status(500).send({ msg: "Algo deu errado na sua requisição", error });
    }
}   

export async function updateProduto (req, res) {
    try {
        const id = req.params.id
        const {nome, preco} = req.body
        const imagem =  req.file? req.file.path : undefined

        const produto  = await UpdateProdutosService(id, nome, preco, imagem)

        return res.status(200).send({msg: 'As informações foram atualizadas com sucesso: ', produto})
    } catch (error) {
        console.error(error); // Registrar o erro
        return res.status(500).send({ msg: "Algo deu errado na sua requisição", error });
    }
}
export async function deleteProduto (req, res) {
    try {
        const {id} = req.body

        const produto  = await DeleteProdutoService(id)

        return res.status(200).send({msg: 'deletado com sucesso: ', produto})
    } catch (error) {
        console.error(error); // Registrar o erro
        return res.status(500).send({ msg: "Algo deu errado na sua requisição", error });
    }
}
