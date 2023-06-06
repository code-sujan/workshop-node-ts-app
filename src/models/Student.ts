import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./User";
import sequelize from "../../sequelize-config";

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
}
sequelize.addModels([Student]);
export default Student;