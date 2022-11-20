import { FunctionComponent } from 'react';

import styles from './ThisDay.module.scss';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';

interface Props {
    weather: Weather;
}

const ThisDay: FunctionComponent<Props> = ({ weather }) => {
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    return (
        <header className={styles.root}>
            <div className={styles.top}>
                <div className={styles.wrapper}>
                    <span className={styles.temperature}>{Math.round(weather.main?.temp)}ºC</span>
                    <span className={styles.day}>Сегодня</span>
                </div>
                <GlobalSvgSelector id='sun-icon' />
            </div>
            <div className={styles.bottom}>
                <div className={styles.time}>
                    Время:
                    {' '}
                    <span>{currentTime}</span>
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