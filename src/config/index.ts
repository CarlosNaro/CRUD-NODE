import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || '3000',
  db: {
    host: process.env.POSTGRES_HOST as string,
    user: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DATABASE as string,
  },
};

export default config;
