import { FunctionComponent, useEffect } from 'react';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import Days from './components/Days/Days';

import styles from './Home.module.scss';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';

interface Props {
    
}

const Home: FunctionComponent<Props> = (props) => {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  console.log(weather)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords)
        dispatch(fetchCurrentWeather(position.coords.latitude, position.coords.longitude))
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}

export default Home;