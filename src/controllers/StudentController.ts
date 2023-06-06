import { Request, Response } from "express";
import Student from "../models/Student";
import StudentService, { StudentModel } from "../services/StudentService";
import User from "../models/User";
import StudentBook from "../models/StudentBook";
import Book from "../models/Book";

export default {
    Index : async (req:Request, res:Response) => {
        const list = await Student.findAll({include : [User]});
        res.send(list);
    },
    New : async(req:Request, res:Response) => {
        const data : StudentModel = req.body;
        const student = await StudentService.Create(data);
        res.send(student);
    },
    Books : async(req:Request, res:Response) => {
        try{
            const id : number = Number(req.params.id);
            const student = await Student.findByPk(id);
            if(!student) throw Error(`Invalid student id ${id}`);
            const list = (await StudentBook.findAll({where : {studentId : id, isReturned : false}, include : [Book]}))
            .map(x => x.book);
            res.send({student, books: list});
        }
        catch(e : any){
            res.status(400).send(e.message);
        }
    },
    AssignBook : async (req: Request, res: Response) => {
        try{
            const id : number = Number(req.params.id);
            const data : {bookId : number} = req.body;
            const student = await Student.findByPk(id);
            if(!student) throw Error(`Invalid student id ${id}`);

            const book = await Book.findByPk(data.bookId);
            if(!book) throw Error(`Invalid Book id ${data.bookId}`);

            const model = StudentBook.build({studentId : id, bookId : data.bookId, isReturned : false});
            await model.save();
            res.send(model);
        }
        catch(e : any){
            res.status(400).send(e.message);
        }
    },
    Return : async (req: Request, res: Response) => {
        try{
            const id : number = Number(req.params.id);
            const bookId : number = Number(req.params.bookId);
            const student = await Student.findByPk(id);
            if(!student) throw Error(`Invalid student id ${id}`);

            const book = await Book.findByPk(bookId);
            if(!book) throw Error(`Invalid Book id ${bookId}`);

            const model = await StudentBook.findOne({where: {studentId : id, bookId : bookId}});
            if(!model) throw Error(`Book ${book.name} not assigned to student ${student.name}`);
            model.isReturned = true;
            await model.save();
            res.send(model);
        }
        catch(e : any){
            res.status(400).send(e.message);
        }
    },
}