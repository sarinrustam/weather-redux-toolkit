import { FunctionComponent } from 'react';
import Card from './Card';

import styles from './Days.module.scss';
import Tabs from './Tabs';

interface Props {}

export interface Day {
	[key: string]: string,
}

const Days: FunctionComponent<Props> = (props) => {
    const days: Array<Day> = [{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'sun-icon',
			temp_day: '+18ºC',
			temp_night: '+14ºC',
			info: 'Облачно',
		}];

    return (
			<>
				<Tabs />
        <div className={styles.root}>
					{
						days.map((day: Day) => {
							 return <Card key={day.day} day={day} />
						})
					}
        </div>
			</>
    )
}

export default Days;