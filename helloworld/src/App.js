import React from 'react';
import Time from './Time';
import Button from './Button';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {time: Date()};
    this.setTime = this.setTime.bind(this);
  }

  setTime(date){
    this.setState((state, props) => {
      return {time: date};
    });
  }

  render()
  {
    return (
    <div>
      <h1>Hello World</h1>
      <Button setTime={this.setTime}/>
      <Time time={this.state.time}/>
    </div>
    );
  }

}


export default App;
