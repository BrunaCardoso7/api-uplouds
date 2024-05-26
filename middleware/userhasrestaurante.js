import { getuserHasRestaurante } from "../service/restauranteService.js";

export async function UserHasRestauranteMiddleware (req, res, next) {
    const user_id = req.query.user_id;
    try {
        console.log("teste", user_id)

        const {hasRestaurante, restauranteInfo} = await getuserHasRestaurante(user_id)

        req.hasRestaurante = hasRestaurante;
        req.restauranteInfo = restauranteInfo ? {
            id: restauranteInfo.id,
            user_id: restauranteInfo.user_id,
            descricao: restauranteInfo.descricao,
            categoria: restauranteInfo.categoria,
            endereco: restauranteInfo.endereco,
            imagem: restauranteInfo.imagem,
            nome: restauranteInfo.nome,
            createdAt: restauranteInfo.createdAt,
            updatedAt: restauranteInfo.updatedAt
        } : null;

        next();
    } catch (error) {
        console.error(error)
    }
}

export default UserHasRestauranteMiddleware