import React from 'react';
import Count from './Count'

import './button.css';

class Button extends React.Component {

  constructor(props){
    super(props);
    this.state = {count: 0};
    this.getTime = this.getTime.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  getTime(){
    console.log(Date());
    this.props.setTime(Date());

    this.incrementCount();
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.getTime}>
          getDate
        </button>
        <Count count={this.state.count}/>
      </div>
    );
  }
}

export default Button;
