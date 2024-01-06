import { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import Days from './components/Days/Days';
import { selectCurrentWeather } from '../../store/weather/selectors';
import { useAppDispatch } from '../../store/store';
import { fetchCurrentWeather } from '../../store/weather/asyncActions';
import { fetchCurrentCity } from '../../store/city/asyncActions';
import { selectCurrentCity } from '../../store/city/selectors';

import styles from './Home.module.scss';

interface Props {}

const Home: FunctionComponent<Props> = (props) => {
  const weather = useSelector(selectCurrentWeather);
  const city = useSelector(selectCurrentCity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(fetchCurrentCity({ latitude: position.coords.latitude, longitude: position.coords.longitude }));
      }
    );
  }, []);

  useEffect(() => {
    if (city.latitude && city.longitude) {
      dispatch(fetchCurrentWeather({ latitude: city.latitude, longitude: city.longitude }));
    }
  }, [city]);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      {/* <Days /> */}
    </div>
  );
};

export default Home;
