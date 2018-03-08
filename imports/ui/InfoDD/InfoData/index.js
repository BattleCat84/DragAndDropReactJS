import React from 'react';
import PropTypes from 'prop-types';
import DDType from './DDType';
import DDExtraInfo from './DDExtraInfo';

import './styles.css';

const InfoData = ({ data }) => {
  const { type, ddState, time, difficulty } = data;
  return(
  <div className='infoDataCont'>
    <DDType type={type} ddState={ddState} />
    <DDExtraInfo time={time} difficulty ={difficulty} />
  </div>);
};

InfoData.propTypes = {
  data: PropTypes.shape({
      type: PropTypes.string.isRequired,
      ddState: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      difficulty: PropTypes.string.isRequired,
  }),
};

export default InfoData;
//https://cdnjs.com/libraries/weather-icons
