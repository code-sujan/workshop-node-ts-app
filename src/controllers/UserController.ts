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
        try{
            const data : UserModel = req.body;
            const user = await UserService.Create(data);
            res.send(user);
        }
        catch(e: any){
            res.status(400).send(e.message);
        }
    },
    Edit: async(req:Request, res:Response) => {
        try{
            const id : number = Number(req.params.id);
            const user = await User.findByPk(id);
            if(!user) throw Error(`Invalid user id ${id}`);
            const data:UserModel = req.body;
            await UserService.Edit(user, data);
            res.send(user);
        }
        catch(e: any){
            res.status(400).send(e.message);
        }
    },
    Delete: async(req:Request, res:Response) => {
        try{
            const id : number = Number(req.params.id);
            const user = await User.findByPk(id);
            if(!user) throw Error(`Invalid user id ${id}`);
            await UserService.Delete(user);
            res.send("Success");
        }
        catch(e: any){
            res.status(400).send(e.message);
        }
    }
}