import { forwardRef } from 'react';
import style from './ItemGame.module.css';
import classNames from 'classnames/bind';
import Button from 'components/mini.components/Button';
import PropTypes from 'prop-types';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import InfoPopUp from 'components/InfoPopUp';
import { useState } from 'react';
const cx = classNames.bind(style);

const ItemGame = forwardRef(({ className, data, ...props }, ref) => {
    const classes = cx('container', {
        [className]: className,
    });
    const [isShow, setIsShow] = useState(false);
    const [dataView, setDataView] = useState(data);

    const handleViewInfo = async () => {
        const info = await fetch(`http://localhost:8080/api/getItemInfo?masp=${data.masp}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        });
        const datadecode = await info.json();
        setDataView(datadecode);
        setIsShow(true);
    }
    return (
        <div className={cx(classes)}>
            <InfoPopUp data={dataView} isShow={isShow} setIsShow={setIsShow} />
            <h1>{data.ten}</h1>
            <p>ID: <span>{data.masp}</span></p>
            <Button right={true} icon={faEye} onClick={handleViewInfo}>Xem thông tin</Button>
        </div>
    )
})

ItemGame.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
        infoAcc: PropTypes.oneOf(['new', 'vip', 'hot', 'sale']).isRequired,
    }).isRequired,
}

export default ItemGame;