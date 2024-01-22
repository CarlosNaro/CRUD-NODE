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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
class UserService {
    constructor() { }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.Users.findAll();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.Users.findByPk(id);
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = yield bcrypt_1.default.hash(user.password, 5);
            console.log(":::antes de registrar user::", user, password);
            return yield user_model_1.Users.create(Object.assign(Object.assign({}, user), { password }));
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToUpdate = yield user_model_1.Users.findByPk(id);
            if (!userToUpdate) {
                throw new Error('User not found');
            }
            return yield userToUpdate.update(user);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToDelete = yield user_model_1.Users.findByPk(id);
            if (!userToDelete) {
                throw new Error('User not found');
            }
            return yield userToDelete.destroy();
            // return await Users.destroy({
            //   where: { id },
            // });
        });
    }
    // loginUser usando la libreria jwt para generar el token
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // verificar si el usuario existe
            const user = yield user_model_1.Users.findOne({ where: { email } });
            if (!user) {
                throw new Error('User not found');
            }
            // verificar si la contraseña es correcta
            const validPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!validPassword) {
                throw new Error('Invalid password');
            }
            // generar el jwt token
            const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });
            console.log("token generado", token);
            console.log("user", user);
            const authenticated = {
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
                token: token
            };
            return { authenticated };
        });
    }
}
exports.default = UserService;
