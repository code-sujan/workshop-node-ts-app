import bcrypt from 'bcrypt'
import User from '../models/User';
import { Op } from 'sequelize';
import UserDeleteValidator from '../validators/UserDeleteValidator';

export type UserModel = {
    name : string,
    email : string,
    password : string
};

export default {
    Create : async (data: UserModel) :Promise<User> => {
        const existingUser = await User.findOne({where : {'username' : data.email}});
        if(existingUser) throw Error(`${data.email} already in use`);
        const hash = await bcrypt.hash(data.password, 10);
        const user = User.build({name : data.name, email: data.email, username:data.email, password:hash});
        await user.save();
        return user;
    },
    Edit : async(user:User, data:UserModel) => {
        const existingUser = await User.findOne({where : {'username' : data.email, 'id' : {[Op.not] : user.id}}});
        if(existingUser) throw Error(`${data.email} already in use`);
        user.name = data.name;
        user.email = data.email;
        user.username = data.email;
        await user.save();
    },
    Delete : async(user:User) => {
        await UserDeleteValidator.validate(user);
        await user.destroy();
    }
}