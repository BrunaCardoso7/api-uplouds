import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { v4 } from "uuid";
import User from "./userModel.js";

const Restaurante = sequelize.define('restaurante', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => v4()
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Restaurante