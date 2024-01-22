"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const { database, user, password, host } = config_1.default.db;
const sequelize = new sequelize_1.Sequelize(database, user, password, {
    host: host,
    dialect: 'postgres',
    //logging: false,
});
exports.default = sequelize;
