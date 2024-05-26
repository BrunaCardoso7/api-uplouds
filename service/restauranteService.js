import Restaurante from "../model/restauranteModel.js"
import User from "../model/userModel.js"



export async function createService (nome, decricao, endereco, imagem, user_id, categoria) {
    try {
        const restaurante = await Restaurante.create({
            nome: nome,
            endereco: endereco,
            descricao: decricao,
            imagem: imagem,
            user_id: user_id
        })

        return restaurante
    } catch (error) {
        console.error(error)
    }
}
export async function getRestarantesService () {
    try {
        const restaurante = await Restaurante.findAll()
        return restaurante
    } catch (error) {
        console.error(error)
    }
}
export async function UpdateRestarantesService (id, nome, descricao, endereco, imagem) {
    try {
        const restaurante = await Restaurante.findByPk(id)

        if(!restaurante) {
            console.log('Restaurantes não encontrados')
        }

        const updateFields = {}
        if (nome !== undefined) updateFields.nome = nome;
        if (descricao !== undefined) updateFields.descricao = descricao;
        if (endereco !== undefined) updateFields.endereco = endereco;
        if (imagem !== undefined) updateFields.imagem = imagem;

        Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);

        await restaurante.update(updateFields);

        console.log('Restaurante atualizado com sucesso');

        return restaurante
    } catch (error) {
        console.error(error)
    }
}

export async function DeleteRestauranteService(id) {
    try {
        const findedRestaurante = await Restaurante.findByPk(id)

        if (!findedRestaurante) {
            throw new Error('Restaurante not found');
        }

        await findedRestaurante.destroy()

        return findedRestaurante;
    } catch (error) {
        console.error(error)
    }
}
export async function getByIdService(id) {
    try {
        const findedRestaurante = await Restaurante.findByPk(id)

        return findedRestaurante;
    } catch (error) {
        console.error(error)
    }
}