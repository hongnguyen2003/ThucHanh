import { forwardRef } from 'react';
import style from './CatalogItem.module.css';
import classNames from 'classnames/bind';
import ListItem from 'components/ListItem';
const cx = classNames.bind(style);

const CatalogItem = forwardRef(({ className, sampleData, ...props }, ref) => {
    const classes = cx('container', {
        [className]: className,
    });



    return (
        <div className={cx(classes)}>
            <ListItem className={cx('itemContainer')} sampleData={sampleData} />
        </div>
    )
})


export default CatalogItem;