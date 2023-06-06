import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import sequelize from "../../sequelize-config";
import Book from "./Book";
import Student from "./Student";

@Table({tableName: "student_books"})
class StudentBook extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id! : number

    @ForeignKey(() => Student)
    @Column
    studentId! : number

    @BelongsTo(() => Student)
    student! : Student

    @ForeignKey(() => Book)
    @Column
    bookId! : number

    @BelongsTo(() => Book)
    book! : Book

}
sequelize.addModels([StudentBook]);
StudentBook.sync({alter : true});
export default StudentBook;