import {Sequelize} from "sequelize";

const db = new Sequelize('TugasIndividu4_PWL', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;