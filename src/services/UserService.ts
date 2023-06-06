import bcrypt from 'bcrypt'
import User from '../models/User';

export type UserModel = {
    name : string,
    email : string,
    password : string
};

export default {
    Create : async (data: UserModel) :Promise<User> => {
        const hash = await bcrypt.hash(data.password, 10);
        const user = User.build({name : data.name, email: data.email, username:data.email, password:hash});
        await user.save();
        return user;
    }
}