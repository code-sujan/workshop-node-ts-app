import Student from "../models/Student";
import User from "../models/User";

export default {
    validate : async (user : User) => {
        var student = await Student.findOne({where : {'userId' : user.id}});
        if(student) throw Error(`User ${user.email} linked with student`);
    }
}