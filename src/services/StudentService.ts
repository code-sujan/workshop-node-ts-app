import Student from "../models/Student";
import UserService from "./UserService";
import { UserModel } from "./UserService";

export type StudentModel = {
    name : string,
    email: string,
    password:string,
    address : string
};

export default {
    Create : async (data: StudentModel) :Promise<Student> => {
        const userModel = <UserModel>{name : data.name, email : data.email, password : data.password};
        const user = await UserService.Create(userModel);
        const student = Student.build({name : data.name, address : data.address, userId : user.id});
        await student.save();
        return student;
    }
}