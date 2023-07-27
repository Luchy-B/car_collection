import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Main from './Main';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem';
import Reservation from './Reservation';
import Details from './Details';
import DeleteItem from './DeleteItem';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="ADD ITEM" element={<AddItem />} />
      <Route path="MY RESERVATION" element={<Reservation />} />
      <Route path="DETAILS" element={<Details />} />
      <Route path="DELETE ITEM" element={<DeleteItem />} />
    </Routes>
  </BrowserRouter>
);

export default App;
