import { FunctionComponent } from 'react';

import styles from './ThisDay.module.scss';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

interface Props {}

const ThisDay: FunctionComponent<Props> = () => {
  return (
    <header className={styles.root}>
        <div className={styles.top}>
            <div className={styles.wrapper}>
                <span className={styles.temperature}>20</span>
                <span className={styles.day}>Сегодня</span>
            </div>
            <GlobalSvgSelector id='sun-icon' />
        </div>
        <div className={styles.bottom}>
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
    </header>
  )
}

export default ThisDay;