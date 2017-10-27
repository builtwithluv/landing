import React from 'react';
import './styles/base.scss';

import Logo from './components/base/logo';

export default class Root extends React.Component {
  render() {
    return <Logo animate />;
  }
}
