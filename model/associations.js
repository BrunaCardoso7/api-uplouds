import User from './userModel.js';
import Restaurante from './restauranteModel.js';

User.hasOne(Restaurante, { foreignKey: 'user_id', as: 'restaurante' });
Restaurante.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

export { User, Restaurante };