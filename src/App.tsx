import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './espinaco/apps/app1/App1';

function App({ nameApp = "app1" }) {
  if(nameApp === "app1") {
    return (
      <div className="App">
        <App1 />
      </div>
    );
  } else {
    return (<h1>APP NO ENCONTRADA</h1>);
  }
  
}

export default App;
