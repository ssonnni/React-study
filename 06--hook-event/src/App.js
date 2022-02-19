import React from 'react';
import styled from 'styled-components';
import { NavLink, Route, Routes } from 'react-router-dom';

import DateRange1 from './pages/DateRange1'

function App() {
  return (
    <div>
      <h1>06-hook-event</h1>

      <nav>
        <NavLink to='/daterange1'>[DateRange1]</NavLink>
      </nav>
      <hr />

      <Routes>
        <Route path="/daterange1" element = {<DateRange1/>} />
      </Routes>
     
    </div>
  );
}

export default App;
