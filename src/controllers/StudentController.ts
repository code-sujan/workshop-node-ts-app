import { Request, Response } from "express";
import Student from "../models/Student";
import StudentService, { StudentModel } from "../services/StudentService";
import User from "../models/User";

export default {
    Index : async (req:Request, res:Response) => {
        const list = await Student.findAll({include : [User]});
        res.send(list);
    },
    New : async(req:Request, res:Response) => {
        const data : StudentModel = req.body;
        const student = await StudentService.Create(data);
        res.send(student);
    }
}