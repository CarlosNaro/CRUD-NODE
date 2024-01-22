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
const user_service_1 = __importDefault(require("../services/user.service"));
const userService = new user_service_1.default();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.getUser();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService.getUserById(parseInt(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService.createUser(req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService.updateUser(parseInt(id), req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService.deleteUser(parseInt(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
// crear el  loginUserCtrl
const loginUserCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(":::req.body::", req.body);
        const { email, password } = req.body;
        const user = yield userService.loginUser(email, password);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.default = { getUsers, getUserById, createUser, updateUser, deleteUser, loginUserCtrl };
