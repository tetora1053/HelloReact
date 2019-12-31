import React from 'react';
import Count from './containers/Count'

import './button.css';

const Button = (props) => (
  <div>
    <button className="button" onClick={props.getTime}>
      getDate
    </button>
    <Count />
  </div>
);

export default Button;

