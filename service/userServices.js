import User from "../model/userModel.js";

export async function createuser (nome, email, senha) {
    try {
        const user = await User.create({
            nome: nome,
            email: email,
            senha: senha
        })

        return user
    } catch (error) {
        return res.status(400).send({msg: 'algo deu errado', error})
    }
}
export async function findEmail (email) {
    try {
        const user = await User.findOne({where: {email: email}})
        if (!user) {
            throw new Error('Usuário não cadastrado')
        }
        return user
    } catch (error) {
        return res.status(400).send({msg: 'algo deu errado', error})
    }
}
