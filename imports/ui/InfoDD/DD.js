import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const DD = ({ dragAndDrop }) => ( //destructuring
      <div className= "DDCont">
        <h1>
          {dragAndDrop}
        </h1>
      </div>
);


DD.propTypes = {
  dragAndDrop: PropTypes.string.isRequired,
};

export default DD;
//https://cdnjs.com/libraries/weather-icons
