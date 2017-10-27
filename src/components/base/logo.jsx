import React from 'react';
import PropTypes from 'prop-types';
import LogoSvg from '../../assets/builtwithluv.svg';

const Logo = ({containerStyle}) => (
  <div className={containerStyle}>
    <LogoSvg className="logo__svg" style={{width: 500, height: 500}} />
  </div>
);

Logo.propTypes = {
  containerStyle: PropTypes.object,
};

Logo.displayName = "Logo";

export default Logo;
