import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DriverStandings from './Components/DriverStandings';
import ConstructorStandings from './Components/ConstructorStandings';
import FullCalender from './Components/FullCalendar';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Navbar />}>
  <Route index element={<App />} />
  <Route path="driver-standings" element={<DriverStandings />} />
  <Route path="constructor-standings" element={<ConstructorStandings />} />
  <Route path="calendar" element={<FullCalender />} />
  </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
