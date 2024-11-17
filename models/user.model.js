import { User } from '@config/sequelize.config.js';

const getUsersModel = async () => {
    try {
        const user = await User.findAll({
            where: {
                role: 'USERS'
            }
        });
        return user;
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const addUserModel = async (user) => {
    try {
        // Check if username or email already exists
        const existingUser = await User.findOne({
            where: {
                username: user.username,
            }
        });

        if (existingUser) {
            return 'USER_DUPLICATE';
        }
        const existingEmail = await User.findOne({
            where: {
                email: user.email,
            }
        });

        if (existingEmail) {
            return 'EMAIL_DUPLICATE';
        }

        const userInstance = await User.create({
            username: user.username,
            password: user.password,
            fullname: user.fullname,
            address: user.address,
            email: user.email,
            sex: user.sex
        });
        return userInstance;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const updateUserModel = async (user) => {
    try {
        const [rows, field] = await User.update(
            {
                password: user.password,
                fullname: user.fullname,
                address: user.address,
                email: user.email,
                sex: user.sex
            },
            {
                where: {
                    username: user.username
                }
            }
        );
        return rows;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const delUserModel = async (id) => {
    try {
        const rows = await User.destroy({
            where: {
                username: id
            }
        });
        return rows;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};

const getInfoUserModel = async (username) => {
    try {
        const user = await User.findOne({
            where: {
                username: username
            }
        });
        return user;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};


export { getUsersModel, addUserModel, delUserModel, updateUserModel, getInfoUserModel };