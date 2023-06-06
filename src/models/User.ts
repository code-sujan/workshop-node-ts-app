import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import sequelize from "../../sequelize-config";

@Table({tableName : "users"})
class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id! : number;

    @Column
    name!: string;

    @Column
    username!: string;

    @Column
    email!: string;

    @Column({
        type: DataType.TEXT
    })
    password!: string;
}

sequelize.addModels([User]);
User.sync({alter:true});
export default User;


