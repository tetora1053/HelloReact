import React from 'react';

class Button extends React.Component {

  constructor(props){
    super(props);
    this.getTime = this.getTime.bind(this);
  }

  getTime(){
    console.log(Date());
    this.props.setTime(Date());
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.getTime}>
          getDate
        </button>
      </div>
    );
  }
}

export default Button;
