import { User } from '@config/sequelize.config.js';
const registerUserModel = async (user) => {
    try {
        const newUser = await User.create({
            username: user.username,
            password: user.password,
            fullname: user.fullname,
            address: user.address,
            email: user.email,
            sex: user.sex
        });
        return newUser;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const loginUserModel = async (username, password) => {
    try {
        const user = await User.findOne({ where: { username, password } });
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};


export { registerUserModel, loginUserModel }