"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
// import routerProduct from '../routes/product.router';
// import routesUser from '../routes/user.router';
const connection_db_1 = __importDefault(require("../db/connection.db"));
const config_1 = __importDefault(require("../config"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = config_1.default.port;
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
        (0, routes_1.default)(this.app);
        // this.app.use('/api/products', routerProduct);
        // this.app.use('/api/users', routesUser);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        // this.app.use(express.urlencoded({extended: false}));
        this.app.use((0, cors_1.default)());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Database online conectada ');
                yield connection_db_1.default.sync();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.Server = Server;
