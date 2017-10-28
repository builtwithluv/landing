/**************************************
 * MODULES
 **************************************/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**************************************
 * ASSETS
 **************************************/
import ImportedSvg from './under-construction.svg';

/**************************************
 * COMPONENT
 **************************************/
const Svg = ({
  containerStyle,
  style,
}) => (
  <div style={style} className={classNames('Svg__UnderConstruction', containerStyle)}>
    <ImportedSvg role="img" />
  </div>
);

Svg.displayName = "Svg/under-construction";

Svg.propTypes = {
  containerStyle: PropTypes.object,
};

export default Svg;
