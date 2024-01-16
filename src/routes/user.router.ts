import { Router } from "express";
import { newUser, LoginUser } from "../controllers/user.controller";

const router = Router();

router.post("/", newUser);

router.post("/login", LoginUser);

export default router;