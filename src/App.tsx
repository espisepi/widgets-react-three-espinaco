import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './espinaco/apps/app1/App1';

function App({ name = "app1", configuration = {} }) {
  if(name === "app1") {
    return (
      <div className="App">
        <App1 configuration = { configuration } />
      </div>
    );
  } else {
    return (<h1>APP NO ENCONTRADA</h1>);
  }
  
}

export default App;
