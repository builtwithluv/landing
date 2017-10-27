import React from 'react';
import PropTypes from 'prop-types';
import LogoSvg from './builtwithluv.svg';

const Logo = ({containerStyle}) => (
  <div className={containerStyle}>
    <LogoSvg className="logo__svg" style={{width: 500, height: 500}} />
  </div>
);

Logo.displayName = "Logo";

Logo.propTypes = {
  containerStyle: PropTypes.object,
};

export default Logo;
