import { Router } from "express";
import UserController from "../controller/user.controller";
const userRouter = Router();

const control = new UserController();

userRouter.get('/user', control.get.bind(control))

export default userRouter;