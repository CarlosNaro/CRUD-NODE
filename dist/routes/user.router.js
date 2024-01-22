"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = (0, express_1.Router)();
router
    .get('/', user_controller_1.default.getUsers)
    .get('/:id', user_controller_1.default.getUserById)
    .post('/login', user_controller_1.default.loginUserCtrl)
    .post('/', user_controller_1.default.createUser)
    .put('/:id', user_controller_1.default.updateUser)
    .delete('/:id', user_controller_1.default.deleteUser);
exports.default = router;
