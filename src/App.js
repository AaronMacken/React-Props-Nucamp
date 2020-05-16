import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleAndText from './TitleAndText';

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <hr />
      <TitleAndText titleText="My Name is Aaron" pText="I like React!" />
      <TitleAndText titleText="My Name is Steve" pText="I Also like React!" />
      <TitleAndText titleText="My Name is Aaron" pText="You cant like react, I'm the only one who likes react" />
      <TitleAndText titleText="My Name is Jeff" pText="And I like React!" />
    </div>
  );
}

export default App;
