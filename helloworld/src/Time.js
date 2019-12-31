import React from 'react';
import './Time.css';

const Time = (props) => (
  <div className="Time">
  <p>本日は{props.time}です。</p>
  </div>
);

export default Time;

