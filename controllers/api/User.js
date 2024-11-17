import { delUserModel, addUserModel, updateUserModel } from "../../models/user.model";

const addUser = async (req, res, next) => {

    try {
        const user = req.body;

        if (!req.body.username) return res.status(400).json({ message: "missing info" });
        const resu = await addUserModel(user);
        if (resu === null) return res.status(500).json({ message: "Error to add" });
        return res.status(200).json({ message: "User added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};
const delUser = async (req, res, next) => {
    try {
        const a = req.body;
        if (!req.body.id) return res.status(400).json({ message: "ID is required" });
        const { id } = req.body;
        const resu = await delUserModel(id);
        if (resu === null) return res.status(500).json({ message: "Error to delete" });
        return res.status(200).json({ message: "User deleted" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};
const updateUser = async (req, res, next) => {

    try {
        if (!req.body.username) return res.status(400).json({ message: "missing info" });
        const user = req.body;
        const resu = await updateUserModel(user);
        if (resu === null) return res.status(500).json({ message: "Error to update" });
        return res.status(200).json({ message: "User updated" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "", ...error });
    }
};

export { addUser, delUser, updateUser };