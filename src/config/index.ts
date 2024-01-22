import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || '3000',
  db: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
  },
};

export default config;
