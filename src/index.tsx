import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Find all widget divs
const widgetDivs = document.querySelectorAll('.ultimate-react-three-espinaco, #ultimate-react-three-espinaco');

// Inject our React App into each class
widgetDivs.forEach(div => {
  const root = ReactDOM.createRoot(div as HTMLElement);
  const url = div.getAttribute("data-symbol") as string;
  console.log(url);
  root.render(
    <React.StrictMode>
      <App name="app1" configuration={{url:url}}/>
    </React.StrictMode>
  );
});


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
