import React from 'react';
import { ReactComponent as HeaderLogoSvg } from '../../images/header-logo.svg';
import { ReactComponent as ChangeThemeSvg } from '../../images/change-theme.svg';

interface Props {
  id: string;
}

const GlobalSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'header-logo':
        return <HeaderLogoSvg />

    case 'change-theme':
        return <ChangeThemeSvg />
    default:
      return null;
  }
};

export default GlobalSvgSelector;
