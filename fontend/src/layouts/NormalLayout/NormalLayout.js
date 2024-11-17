import Header from 'components/Header';
import style from './NormalLayout.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

export default function NormalLayout({ children }) {

    return (
        <div className={cx('container')}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}