import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'library_db',
  dialect: 'postgres',
  username: 'postgres',
  password: 'data-safety',
  host: 'localhost',
  port: 5432
});

export default sequelize;