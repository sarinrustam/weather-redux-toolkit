import { FunctionComponent } from 'react';

import styles from './Days.module.scss';

interface Props {}

const Tabs: FunctionComponent<Props> = (props) => {
  const tabs = [
    {
      value: 'На 3 следующих дня',
    },
    // {
    //   value: 'На 10 дней',
    // },
    // {
    //   value: 'На месяц',
    // }
  ]
  return (
    <div className={styles.tabs}>
        <div className={styles.tabs_wrapper}>
          {
            tabs.map((tab) => (
              <div className={styles.tab} key={tab.value}>{tab.value}</div>
            ))
          }
        </div>
        <div className={styles.cancel}>Отменить</div>
    </div>
  )
}

export default Tabs;