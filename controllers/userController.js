import express from 'express'
import { createuser, findEmail, generateToken } from '../service/userServices.js'
import {hash, compare} from 'bcrypt'

export async function createUserController (req, res) {
    try {
        const {nome, email, senha, tipo} = req.body
        console.log(nome, email, senha, tipo)

        const secretPass = await hash(senha, 10)

        if(!nome && !email && !senha) {
            console.log('ta faltando dados')
        }

        const tokenPrivate = JwtService.generateToken({email})

        const user = await createuser(nome, email, secretPass, tipo)
        
        return res.status(200).send({msg: 'usuario cadastrado com sucesso', user, tokenPrivate})
    } catch (error) {
        console.error(error)
    }
}
export async function loginUserController (req, res) {
    try {
        const {email, senha} = req.body

        const user = await findEmail(email)

        const comparePass = await compare(senha, user.senha) 

        const tokenPrivate = generateToken(user.id)

        console.log(tokenPrivate)

        if (!comparePass) {
            throw new Error('Senha incorreta');
        }

        return res.status(200).send({msg: 'usuario logado com sucesso', user, tokenPrivate})
    } catch (error) {
        console.error(error)
    }
}