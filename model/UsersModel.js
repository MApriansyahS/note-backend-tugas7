import { DataTypes } from "sequelize";
import db from "../config/Database.js"; 

const Users = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false, 
    unique: true, 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  refresh_token: {
    type: DataTypes.TEXT,
    allowNull: true, 
  },
}, {
  freezeTableName: true, 
  timestamps: true, 
  createdAt: "Tanggal_dibuat", 
  updatedAt: "Tanggal_diperbarui", 
});

export default Users;
