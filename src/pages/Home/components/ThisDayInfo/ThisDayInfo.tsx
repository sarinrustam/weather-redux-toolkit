import { FunctionComponent } from 'react';
import cloud from '../../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';

import styles from './ThisDayInfo.module.scss';

interface Props {}

export interface Item {
  icon_id: string;
  weather_name: string;
  weather_value: string;
}

const ThisDayInfo: FunctionComponent<Props> = ({}) => {
  const items = [{
    icon_id: 'temp',
    weather_name: 'Температура',
    weather_value: '20ºC - ощущается, как 17ºC',
  },
  {
    icon_id: 'pressure',
    weather_name: 'Давление',
    weather_value: '765 мм ртутного столба - нормальное',
  },
  {
    icon_id: 'precipitation',
    weather_name: 'Осадки',
    weather_value: 'Без осадков',
  },
  {
    icon_id: 'wind',
    weather_name: 'Ветер',
    weather_value: '3 м/с юго-запад - легкий ветер',
  }
];
  return (
    <div className={styles.root}>
      <ul className={styles.items}>
        {items.map((item: Item) => <ThisDayItem key={item.icon_id} item={item} />)}
      </ul>
      <img className={styles.cloud} src={cloud} alt="Облака"/>
    </div>
  )
}

export default ThisDayInfo