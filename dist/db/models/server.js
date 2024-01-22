'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require('express'));
const product_router_1 = __importDefault(require('../../routes/product.router'));
const user_router_1 = __importDefault(require('../../routes/user.router'));
const product_model_1 = require('./product.model');
class Server {
  constructor() {
    this.app = (0, express_1.default)();
    this.port = process.env.PORT || '3000';
    this.listen();
    this.midelwares();
    this.Router();
    this.dbConnection();
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port  http://localhost:${this.port} `);
    });
  }
  Router() {
    this.app.use('/api/products', product_router_1.default);
    this.app.use('/api/users', user_router_1.default);
  }
  midelwares() {
    this.app.use(express_1.default.json());
    // this.app.use(express.urlencoded({extended: false}));
  }
  dbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        yield product_model_1.Products.sync();
        console.log('Database online');
      } catch (error) {
        console.log(error);
      }
    });
  }
}
exports.Server = Server;
