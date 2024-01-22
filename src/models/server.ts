import express, { Application } from 'express';
// import routerProduct from '../routes/product.router';
// import routesUser from '../routes/user.router';
import connection from '../db/connection.db';
import config from '../config';
import cors from 'cors';
import routerApi from '../routes';

export class Server {
  private readonly app: Application;
  private readonly port: string;

  constructor() {
    this.app = express();
    this.port = config.port;
    this.get();
    this.listen();
    this.middlewares();
    this.Router();
    this.dbConnection();
  }

  get() {
    this.app.get('/', (req, res) => {
      res.send('API REST - Typescript - Sequelize - Postgres');
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port  http://localhost:${this.port} `);
    });
  }

  Router() {
    
    routerApi(this.app);

    // this.app.use('/api/products', routerProduct);
    // this.app.use('/api/users', routesUser);
  }

  middlewares() {
    this.app.use(express.json());
    // this.app.use(express.urlencoded({extended: false}));
    this.app.use(cors());
  }

  async dbConnection() {
    try {
      console.log('Database online conectada ');
      await connection.sync();
    } catch (error) {
      console.log(error);
    }
  }
}
