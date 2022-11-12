import { FunctionComponent } from 'react'
import { Item } from './ThisDayInfo';
import IndicatorSvgSelector from '../../../../assets/icons/indicators/IndicatorSvgSelector';

import styles from './ThisDayInfo.module.scss';

interface Props {
    item: Item;
}

const ThisDayItem: FunctionComponent<Props> = ({ item }) => {
    const { icon_id, weather_name, weather_value } = item;
    return (
        <li className={styles.item}>
            <div className={styles.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={styles.name}>{weather_name}</div>
            <div className={styles.value}>{weather_value}</div>
        </li>
    )
}

export default ThisDayItem;