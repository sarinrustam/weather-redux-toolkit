import { FunctionComponent } from 'react';
import Select from 'react-select';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import styles from './Header.module.scss';

interface Props {

}

const Header: FunctionComponent<Props> = () => {
    const options = [
        { value: 'chocolate', label: 'Moscow' },
        { value: 'strawberry', label: 'Antalya' },
        { value: 'vanilla', label: 'Grodno' }
      ];

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '195px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 10,
        })
    };
    return (
        <header className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <span className={styles.title}>React weather</span>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.change_theme}>
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select
                    styles={colorStyles}
                    defaultValue={options[0]}
                    options={options}
                />
            </div>
        </header>
    )
}

export default Header;