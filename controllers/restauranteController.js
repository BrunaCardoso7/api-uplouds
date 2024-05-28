import { DeleteRestauranteService, UpdateRestarantesService, createService, getByIdService, getRestarantesService } from "../service/restauranteService.js";

export async function create (req, res) {
    try {
        const { nome, descricao, endereco, categoria } = req.body
        const imagem =  req.file? req.file.path : undefined
        const user_id = req.query.user_id;

        console.log("dados da requisição: ", nome, descricao, endereco, imagem, categoria)
        
        const retaurante = await createService(nome, descricao, endereco, imagem, user_id, categoria)
        
        if(!retaurante) {
            return res.status(200).json({ message: 'algo deu errado'})
        }
        console.log(retaurante)
        return res.status(200).json({ message: 'Você está pronto para compartilhar seus pratos', retaurante});
    } catch (error) {
        return res.status(400).send({msg: 'algo deu errado', error})
    }
}

export async function getRestarantes (req, res) {
    try {
        const restaurante = await getRestarantesService()

        return res.status(200).send({msg: 'essa é a sua lista de restaurantes', restaurante})
    } catch (error) {
        throw error
    }
}
export async function getRestarantesByid (req, res) {
    try {
        
        const hasRestaurante = req.hasRestaurante
        const restInfo = req.restauranteInfo
        
        if (hasRestaurante) {
            console.log(restInfo);
            return res.status(200).json({ message: "tem restaurante", restInfo });
        } else {
            return res.status(200).json({ message: "não tem restaurante" });
        }

    } catch (error) {
        throw error
    }
}
export async function updateRestaurantes (req, res) {
    try {
        const id = req.params.id
        const {nome, descricao, endereco} = req.body
        const imagem =  req.file? req.file.path : undefined

        const restaurante  = await UpdateRestarantesService(id, nome, endereco, descricao, imagem)

        return res.status(200).send({msg: 'As informações foram atualizadas com sucesso: ', restaurante})
    } catch (error) {
        return res.status(400).send({msg: 'algo deu errado', error})
    }
}

export async function DeleteRestaurante (req, res) {
    try {
        const { id } = req.body

        const produto  = await DeleteRestauranteService(id)

        return res.status(200).send({msg: 'deletado com sucesso: ', produto})
    } catch (error) {
        return res.status(400).send({msg: 'algo deu errado', error})
    }
}
export async function getByIdRestaurante (req, res) {
    try {
        const { id } = req.params

        const restaurante = await getByIdService(id) 

        return res.status(200).send(restaurante)
    } catch (error) {
        return res.status(400).send({msg: 'algo deu errado', error})
    }
}