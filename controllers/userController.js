import express from 'express'
import { createuser, findEmail } from '../service/userServices.js'
import {hash, compare} from 'bcrypt'

export async function createUserController (req, res) {
    try {
        const {nome, email, senha} = req.body
        console.log(nome, email, senha)

        const secretPass = await hash(senha, 10)

        if(!nome && !email && !senha) {
            console.log('ta faltando dados')
        }

        const user = await createuser(nome, email, secretPass)
        
        return res.status(200).send({msg: 'usuario cadastrado com sucesso', user})
    } catch (error) {
        console.error(error)
    }
}
export async function loginUserController (req, res) {
    try {
        const {email, senha} = req.body

        const user = await findEmail(email)

        const comparePass = await compare(senha, user.senha) 

        if (!comparePass) {
            throw new Error('Senha incorreta');
        }

        return res.status(200).send({msg: 'usuario logado com sucesso', user})
    } catch (error) {
        console.error(error)
    }
}