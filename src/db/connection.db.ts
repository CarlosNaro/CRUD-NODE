import { Sequelize } from 'sequelize';
import config from '../config';

const { database, user, password, host } = config.db;

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'postgres',
  //logging: false,
});
export default sequelize;
