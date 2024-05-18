import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { v4 } from 'uuid'

const User = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => v4()
    },
    nome: {
        type: DataTypes.UUID,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default User