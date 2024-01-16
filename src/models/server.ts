import express, { Application} from 'express';
import routerProduct from '../routes/product.router';
import routesUser from '../routes/user.router';
import { Product } from './product.model';


export class Server {
    private app: Application;
    private port: string;
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midelwares();
        this.Router();
        this.dbConnection();
        
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port  http://localhost:${this.port} `);
        });
    }

    Router(){
        this.app.use('/api/products', routerProduct);
        this.app.use('/api/users', routesUser);
    }

    midelwares(){
        this.app.use(express.json());
        // this.app.use(express.urlencoded({extended: false}));
    }

    async dbConnection(){
        try {
            await Product.sync();
            console.log('Database online');
        } catch (error) {
            console.log(error);
        }
    }


}