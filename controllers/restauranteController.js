import { UpdateRestarantesService, createService, getRestarantesService } from "../service/restauranteService.js";

export async function create (req, res) {
    try {
        const { nome, descricao, endereco } = req.body
        const imagem =  req.file? req.file.path : undefined
        const user_id = '2c461f43-e3f9-40da-8b10-0fa7e16f7a38'

        const retaurante = await createService(nome, descricao, endereco, imagem, user_id)

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