import { Nhom, Sanpham } from '@config/sequelize.config.js';

const getListGroupsModel = async () => {
    try {
        const nhom = await Nhom.findAll();
        return nhom;
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const getListItemsModel = async () => {
    try {
        const sanphams = await Sanpham.findAll({
            attributes: ['masp', 'ten', 'idnhom']
        });
        return sanphams;
    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};
const getInfoItemModel = async (masp) => {
    try {
        const sanpham = await Sanpham.findOne({
            where: {
                masp: masp
            }
        });
        return sanpham;

    } catch (err) {
        console.error('Lỗi khi truy vấn:', err);
        return null;
    }
};


export { getListGroupsModel, getListItemsModel, getInfoItemModel };