import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';


const DDType = ({type}) => (
  <div className= 'ddtypeCont'>

    <span className='type'>{`${type} `}</span>
  </div>
);

DDType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default DDType;
//https://cdnjs.com/libraries/weather-icons
