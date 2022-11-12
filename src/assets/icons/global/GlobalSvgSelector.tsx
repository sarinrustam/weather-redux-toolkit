import React from 'react';
import { ReactComponent as HeaderLogoSvg } from '../../images/header-logo.svg';
import { ReactComponent as ChangeThemeSvg } from '../../images/change-theme.svg';
import { ReactComponent as SunIconSvg } from '../../images/sun-icon.svg';
import { ReactComponent as CloseIconSvg } from '../../images/close-icon.svg';

interface Props {
  id: string;
}

const GlobalSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'header-logo':
        return <HeaderLogoSvg />

    case 'change-theme':
        return <ChangeThemeSvg />

    case 'sun-icon':
        return <SunIconSvg />

    case 'close-icon':
        return <CloseIconSvg />
          
    default:
      return null;
  }
};

export default GlobalSvgSelector;
