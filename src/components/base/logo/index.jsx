/**************************************
 * MODULES
 **************************************/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**************************************
 * ASSETS
 **************************************/
import LogoSvg from './builtwithluv.svg';

/**************************************
 * COMPONENT
 **************************************/
const Logo = ({
  animate,
  containerStyle,
  hideText,
}) => {
  const mainStyles = classNames(
    'Base__Logo',
    {
      animate,
      'hide-text': hideText,
    },
    containerStyle
  );

  /*
  * Assure that svg meets accessibility standards by providing title and desc
  * https://css-tricks.com/accessible-svgs/
  */
  return (
    <div className={mainStyles}>
      <LogoSvg role="img" />
    </div>
  );
};

Logo.displayName = "Logo";

Logo.propTypes = {
  animate: PropTypes.bool,
  containerStyle: PropTypes.object,
};

export default Logo;
