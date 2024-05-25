import User from "../model/userModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

const secret = process.env.SECRET 

export async function createuser (nome, email, senha, tipo) {
    try {
        const user = await User.create({
            nome: nome,
            email: email,
            senha: senha,
            tipo: tipo
        })

        return user
    } catch (error) {
        return console.error(error)
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
        return console.error(error)
    }
}
export const generateToken = (id) => jwt.sign({id: id}, secret, {expiresIn: 86400}) 

export async function findByIdService (id) {
    try {
        const user = await User.findByPk(id)

        if(!user) {
            console.log('usuario não encontrados')
        }

        console.log('usuario autenticado com sucesso');

        return user
    } catch (error) {
        console.error(error)
    }
}