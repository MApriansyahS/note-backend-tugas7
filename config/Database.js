import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const {
  DB_HOST: host,
  DB_USER: username,  
  DB_PASS: password,  
  DB_NAME: database,
} = process.env;

const db = new Sequelize(database, username, password, {
  host,
  dialect: "mysql"
});

export default db;
