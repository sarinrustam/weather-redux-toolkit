import { FunctionComponent } from 'react';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import Days from './components/Days/Days';

import styles from './Home.module.scss';

interface Props {
    
}

const Home: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}

export default Home;