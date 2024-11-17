import style from './ResetPasswordForm.module.css';
import classNames from 'classnames/bind';
import { faClover } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/mini.components/Button';
const cx = classNames.bind(style);

export default function ResetPasswordForm({ data, className, ...props }) {



    return (
        <div className={cx("container")}>

            <Button left icon={faClover} onClick={handleButtonClick}>Quay!</Button>
        </div>
    );
};

