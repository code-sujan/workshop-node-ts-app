import { Request, Response } from "express";
import Book from "../models/Book";
import BookService, { BookModel } from "../services/BookService";

export default {
    Index : async (req:Request, res:Response) => {
        const list = await Book.findAll();
        res.send(list);
    },
    New : async (req:Request, res:Response) => {
        try{
            const data:BookModel = req.body;
            const book = await BookService.Create(data);
            res.send(book);
        }
        catch(e:any){
            res.status(400).send(e.message);
        }
    },
    Edit : async (req:Request, res:Response) => {
        try{
            const id: number = Number(req.params.id);
            const data:BookModel = req.body;
            
        }
        catch(e:any){
            res.status(400).send(e.message);
        }
    },
    Delete : async (req:Request, res:Response) => {
        try{
            const id: number = Number(req.params.id);
            
        }
        catch(e:any){
            res.status(400).send(e.message);
        }
    }
}