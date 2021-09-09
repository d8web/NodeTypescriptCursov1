import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

interface UserInstance extends Model {
    id: number,
    name: string,
    email: string
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: 'Visitante'
    },
    email: {
        type: DataTypes.STRING,
    }
}, {
    tableName: "users",
    timestamps: false // created_at, updated_at
});