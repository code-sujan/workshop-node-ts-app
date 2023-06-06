import { AutoIncrement, BelongsToMany, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import sequelize from "../../sequelize-config";
import Student from "./Student";
import StudentBook from "./StudentBook";

@Table({tableName: "books"})
class Book extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id! : number

    @Column
    name! : string

    @Column
    author! : string

    @BelongsToMany(() => Student, () => StudentBook)
    students! : Student[]
}
sequelize.addModels([Book]);
Book.sync({alter : true});
export default Book;