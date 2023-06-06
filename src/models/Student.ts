import { AutoIncrement, BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./User";
import sequelize from "../../sequelize-config";
import Book from "./Book";
import StudentBook from "./StudentBook";

@Table({tableName: "students"})
class Student extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id! : number

    @Column
    name! : string

    @Column
    address! : string

    @ForeignKey(() => User)
    @Column
    userId! : number

    @BelongsTo(() => User)
    user! : User
}
    
sequelize.addModels([Student]);
Student.sync({alter : true});
export default Student;