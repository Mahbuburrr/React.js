import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import "font-awesome/css/font-awesome.min.css"

//inline css
/*const headingStyle={
    color:"red",
  fontSize:"3rem",
  textAlign:"center",
  padding:"15px",
  backgroundColor:"purple"
    

}*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />


/* <div>
  <h2 className="headingStyle largeText">Here Date of today</h2>
 <Card />
 <Card />
 <Card />
 </div> */
  

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals