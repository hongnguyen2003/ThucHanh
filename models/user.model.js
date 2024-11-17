import connection from '../config/db.config';

const getUsersModel = async () => {
    try {
        const [rows, field] = await connection.execute('SELECT * FROM `users`');

        return rows;
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const addUserModel = async (user) => {
    try {
        const [rows, field] = await connection.execute('INSERT INTO `users` (`username`, `password`, `fullname`, `address`, `email`, `sex`) VALUES (?, ?, ?, ?, ?, ?)', [user.username, user.password, user.fullname, user.address, user.email, user.sex]);
        return rows;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const updateUserModel = async (user) => {
    try {
        const [rows, field] = await connection.execute('UPDATE `users` SET `password` = ?, `fullname` = ?, `address` = ?, `email` = ?, `sex` = ? WHERE `username` = ?', [user.password, user.fullname, user.address, user.email, user.sex, user.username]);
        return rows;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const delUserModel = async (id) => {
    try {
        const [rows, field] = await connection.execute('DELETE FROM `users` WHERE `username` = ?', [id]);
        return rows;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
export { getUsersModel, addUserModel, delUserModel, updateUserModel };