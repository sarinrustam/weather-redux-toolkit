import { FunctionComponent } from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { Day } from './Days';

import styles from './Days.module.scss';

interface Props {
    day: Day;
}

const Card: FunctionComponent<Props> = ({ day }) => {
  return (
    <div className={styles.card}>
      <div className={styles.day}>{day.day}</div>
      <div className={styles.info}>{day.day_info}</div>
      <div className={styles.image}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={styles.temp_day}>{day.temp_day}</div>
      <div className={styles.temp_night}>{day.temp_night}</div>
      <div className={styles.description}>{day.info}</div>
    </div>
  )
}

export default Card;