import { FunctionComponent } from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';

import styles from './Popup.module.scss';

interface Props {
}

const Popup: FunctionComponent<Props> = () => {
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
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
          <div className={styles.day}>
            <div className={styles.temp}>12ºC</div>
            <div className={styles.day_name}>Среда</div>
            <div className={styles.image}>
              <GlobalSvgSelector id='sun-icon' />
            </div>
            <div className={styles.time}>
                Время:
                {' '}
                <span>21:54</span>
            </div>
            <div className={styles.city}>
                Город:
                {' '}
                <span>Moscow</span>
            </div>
          </div>
          <div className={styles.root}>
              <ul className={styles.items}>
                  {items.map((item: Item) => <ThisDayItem key={item.icon_id} item={item} />)}
              </ul>
          </div>
          <div className={styles.close}>
            <GlobalSvgSelector id='close-icon' />
          </div>
      </div>
    </>
  )
}

export default Popup