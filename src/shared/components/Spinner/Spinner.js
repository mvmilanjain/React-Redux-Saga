import React from 'react';
import PropTypes from 'prop-types';

const Spinner = props => (props.show && <div className={'spinner'}><div/><div/><div/><div/></div>);

Spinner.protoTypes = {show: PropTypes.bool};

Spinner.defaultProps = {show: true};

export default Spinner;