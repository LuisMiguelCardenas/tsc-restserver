"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const db = new Sequelize('u123743004_node', 'u123743004_luismiguel', '3sunalocurA', {
//     host: 'sql626.main-hosting.eu',
//     dialect: 'mysql',
//     // logging: false,
// });
const db = new sequelize_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});
exports.default = db;
// 3sunalocuraS
//# sourceMappingURL=connection.js.map