import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Car from './components/Car';
import Garage from './components/Garage';
import Header from './components/Header';
import FavoriteColor from './components/FavoriteColor';
import Carstate from './components/Carstate';
import Scooter from './components/Scooter';
import List from './components/List';
import Timer from './components/Timer';
import Myform from './components/Myform';
import Statecar from './components/Carstate';
import Function from './components/Function';

//components
// function Car(){
//   return(
//     <h1>my car name is harsha</h1>
//   );
// }
// function Garage(){
//   return(
//     <div>
//       {/* we used empty <></> */}
//       <h1>who lives in my garage?</h1>
//       <Car/>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <Garage/>
    <Header/>
    <FavoriteColor/>
    <Carstate/>
    <Scooter/>
    <List/>
    <Timer/>
    <Myform/>
    <App/>
    <Statecar/>
    <Function/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
