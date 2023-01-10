import { DataTypes } from 'sequelize';
import db from '../db/connection';

// Aca el nombre de la tablña, en este caso es Usuario

const User = db.define('Users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    },
});


export default User;