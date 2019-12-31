import React from 'react';
import './Time.css';

class Time extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Time">
      <p>本日は{this.props.time}です。</p>
      </div>
    );
  }
}

export default Time;
