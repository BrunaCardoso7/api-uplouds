import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { v4 } from "uuid";
import Restaurante from "./restauranteModel.js";

const Produto = sequelize.define('Produtos', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => v4()
    },
    rest_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Restaurante,
            key: 'id'
        }
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "undefined"
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Produto;
