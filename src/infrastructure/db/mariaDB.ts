import {Sequelize} from "sequelize";

const name = process.env.MYSQL_DB_NAME!;
const host = process.env.MYSQL_DB_HOST!;
const port = process.env.MYSQL_DB_PORT!;
const user = process.env.MYSQL_DB_USER!;
const password = process.env.MYSQL_DB_PASSWORD!;

// Option 3: Passing parameters separately (other dialects)
// @ts-ignore
const sequelize = new Sequelize(name, user, password, {
    host: host,
    port: +port,
    dialect: 'mariadb',
});

export const DBInit = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = DBInit;
