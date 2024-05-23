import { UpdateRestarantesService, createService, getRestarantesService } from "../service/restauranteService.js";

export async function create (req, res) {
    try {
        const { nome, descricao, endereco } = req.body
        const imagem =  req.file? req.file.path : undefined
        const user_id = '3c5a5ca0-0526-4292-82ff-3b9ef94b870e'

        console.log("dados da requisição: ", nome, descricao, endereco, imagem)
        
        const retaurante = await createService(nome, descricao, endereco, imagem, user_id)
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
        return res.status(400).send({msg: 'algo deu errado', error})
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

export async function getUsers(req, res) {
    try {
        
    } catch (error) {
        return res.status(500).send({msg: 'não foi possível carregar os dados'})
    }
}