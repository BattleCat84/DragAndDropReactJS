import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';



const DDExtraInfo = ({ time, difficulty }) => (
  <div className= 'ddExtraInfoCont'>
    <span className='extraInfoText'>{`Tiempo: ${time} %`}</span>
    <span className='extraInfoText'>{`Dificultad: ${difficulty}`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  time: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
};


export default DDExtraInfo;
//https://cdnjs.com/libraries/weather-icons
