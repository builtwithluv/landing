/**************************************
 * MODULES
 **************************************/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**************************************
 * ASSETS
 **************************************/
import ImportedSvg from './logo.svg';

/**************************************
 * COMPONENT
 **************************************/
const Svg = ({
  animate,
  containerStyle,
  style,
}) => {
  const mainStyles = classNames(
    'Svg__Logo',
    {
      animate,
    },
    containerStyle
  );

  /*
  * Assure that svg meets accessibility standards by providing title and desc
  * https://css-tricks.com/accessible-svgs/
  */
  return (
    <div className={mainStyles} style={style}>
      <ImportedSvg role="img" />
    </div>
  );
};

Svg.displayName = "Svg/logo";

Svg.propTypes = {
  animate: PropTypes.bool,
  containerStyle: PropTypes.object,
  style: PropTypes.object,
};

export default Svg;
