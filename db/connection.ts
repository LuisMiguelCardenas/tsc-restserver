import { Sequelize } from 'sequelize';


// const db = new Sequelize('u123743004_node', 'u123743004_luismiguel', '3sunalocurA', {
//     host: 'sql626.main-hosting.eu',
//     dialect: 'mysql',
//     // logging: false,
// });

const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
// 3sunalocuraS