import { NextFunction, Request, Response } from "express";
import UserService from "../service/user.service";

export default class UserController {
    private service = new UserService();

    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.service.get();
            return res.status(status).json(message)
        } catch (error) {
            next(error);
        }
    }
}