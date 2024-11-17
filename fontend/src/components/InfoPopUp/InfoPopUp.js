import style from './InfoPopUp.module.css';
import classNames from 'classnames/bind';
import Button from 'components/mini.components/Button';
const cx = classNames.bind(style);


export default function InfoPopUp({ data, isShow, setIsShow, ...props }) {
    const formatCurrency = (amount) => {
        return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return (isShow &&
        <div className={cx('overlay')}>
            <div className={cx('container')}>


                <div className={cx('imgs')}>
                    <img src={`http://localhost:8080/src/imgs/${data.hinhanh}`} alt="Ảnh sản phẩm" />

                </div>
                <div className={cx('content')}>
                    <h1>Thông tin sản phẩm</h1>
                    <p>Tên sản phẩm: <span>{data.ten}</span></p>
                    <p>Mã sản phẩm: <span>{data.masp}</span></p>
                    <p>Giá sản phẩm: <span>{formatCurrency(data.gia)}đ</span></p>
                    <p>Loại sản phẩm: <span>{data.idnhom}</span></p>
                    <p>Mô tả sản phẩm: <span>{data.mota}</span></p>
                </div>
            </div>
            <Button className={cx('close')} onClick={() => setIsShow(false)}>X</Button>

        </div>
    )
}

