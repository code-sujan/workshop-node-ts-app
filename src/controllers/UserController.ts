import { Request, Response } from "express";
import User from "../models/User";
import UserService from "../services/UserService";
import { UserModel } from "../services/UserService";


export default {
    Index : async (req :Request, res: Response) => {
        const list = await User.findAll();
        res.send(list);
    },
    New : async (req: Request, res: Response) => {
        const data : UserModel = req.body;
        const user = UserService.Create(data);
        res.send(user);
    }
}