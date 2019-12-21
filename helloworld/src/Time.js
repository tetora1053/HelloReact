import React from 'react';

class Time extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <p>本日は{this.props.time}です。</p>
      </div>
    );
  }
}

export default Time;
