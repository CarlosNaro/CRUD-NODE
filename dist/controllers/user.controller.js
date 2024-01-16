"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = exports.newUser = void 0;
const newUser = (req, res) => {
    const { body } = req;
    res.json({
        message: "Create User",
        body
    });
};
exports.newUser = newUser;
const LoginUser = (req, res) => {
    const { body } = req;
    res.json({
        message: "Login User",
        body
    });
};
exports.LoginUser = LoginUser;
