import React from 'react';
import './styles/base.scss';

import LogoSvg from './components/base/svgs/logo';
import UnderConstructionSvg from './components/base/svgs/under-construction';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <LogoSvg animate style={{width: 300, height: 300, margin: 'auto'}} />
        <UnderConstructionSvg style={{width: '90%', margin: 'auto', opacity: 0, animation: 'fadeIn 3s 3.5s forwards'}} />
      </div>
    );
  }
}
