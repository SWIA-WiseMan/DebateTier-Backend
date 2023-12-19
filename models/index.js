const initModels = require('./init-models');
const {Sequelize} = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require("../config/config.json")[env];

// const sequelize = new Sequelize("toron_tier", "yerim", "kss10056414", {
//       host: "13.209.133.64",
//       port: "57951",
//   dialect: 'mysql',
// });

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
});

//데이터베이스 연결 확인 
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
const models = initModels(sequelize);

module.exports = models;

// "use strict";

// const fs = require("fs");
// const path = require("path");
// const Sequelize = require("sequelize");
// const process = require("process");
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.json")[env];
// const db = {}; //db 객체 생성

// let sequelize;
// if (config.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//     sequelize = new Sequelize(
//         config.database,
//         config.username,
//         config.password,
//         config
//     );
// }

// fs.readdirSync(__dirname)
//     .filter((file) => {
//         return (
//             file.indexOf(".") !== 0 &&
//             file !== basename &&
//             file.slice(-3) === ".js" &&
//             file.indexOf(".test.js") === -1
//         );
//     })
//     .forEach((file) => {
//         const model = require(path.join(__dirname, file))(
//             sequelize,
//             Sequelize.DataTypes
//         );
//         db[model.name] = model;
//     });

// Object.keys(db).forEach((modelName) => {
//     if (db[modelName].associate) {
//         db[modelName].associate(db);
//     }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
