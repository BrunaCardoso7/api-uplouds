import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { findByIdService } from '../service/userServices.js'

dotenv.config()

const secret = process.env.SECRET

export function checkToken(req, res, next){
    try { 
        const { authorization } = req.headers
    
        if(!authorization){
            return res.send(404)
        }
    
        const parts = authorization.split(" ")
        
        if(parts.length !== 2){
            return res.send(404)
        }
        
        const [ schema, token ] = parts
    
        if(schema !== "Bearer"){
            return res.send(404)
        }
    
        jwt.verify(token, secret, async (error, decoded)=>{
            if(error){
                res.send(401)
            }
            console.log(decoded)
            const user = await findByIdService(decoded.id)
            if(!user || !user.id){
                return res.status(404).send({msg:"Invalid token"})
            }
            req.userId = user.id
        })
        next()
    } catch (error) {
        
    }
}
