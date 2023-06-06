import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

type UserModel = {
    name : string,
    email : string,
    password : string
};

export default {
    Index : async (req :Request, res: Response) => {
        const list = await User.findAll();
        res.send(list);
    },
    New : async (req: Request, res: Response) => {
        const data : UserModel = req.body;
        const hash = await bcrypt.hash(data.password, 10);
        const user = User.build({name : data.name, email: data.email, username:data.email, password:hash});
        await user.save();
        res.send(user);
    }
}