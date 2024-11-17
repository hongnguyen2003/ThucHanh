import { getItemInfo, getListItems, getListGroups } from '../../controllers/api/Item.js';
import isAdmin from '../../middleware/isAdmin.js';

const ItemAPI = (router) => {

    router.get('/getItemInfo', isAdmin, getItemInfo);
    router.get('/getListItems', isAdmin, getListItems);
    router.get('/getListGroups', isAdmin, getListGroups);

    return router;
}
export default ItemAPI;