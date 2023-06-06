import Book from "../models/Book";

export type BookModel = {
    name : string,
    author : string
};

export default {
    Create : async (data: BookModel) => {
        const book = Book.build({name : data.name, author: data.author});
        await book.save();
        return book;
    }
}