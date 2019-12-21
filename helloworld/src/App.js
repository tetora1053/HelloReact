import React from 'react';

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


export default App;
