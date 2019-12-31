import React from 'react';
import Time from './containers/Time';
import Button from './containers/Button';

const App = (props) => (
  <div>
    <h1>Hello World</h1>
    <Button />
    <Time />
    <button onClick={props.countUp}>count:{props.count}</button>
  </div>
);

export default App;

