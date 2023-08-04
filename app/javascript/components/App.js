import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { FiMenu } from 'react-icons/fi';
import Main from './Main';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem';
import Reservation from './Reservation';
import Details from './Details';
import DeleteItem from './DeleteItem';
import ReserveForm from './ReserveForm';

const App = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const user = {
    id: 1,
  };

  return (
    <BrowserRouter>
      <Navbar open={open} setOpen={setOpen} />
      <div className="component">
        <button type="button" className="menu btn" onClick={handleClick}>
          <FiMenu />
        </button>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="RESERVE_FORM" element={<ReserveForm user={user} />} />
          <Route path="ADD_ITEM" element={<AddItem />} />
          <Route path="MY_RESERVATION" element={<Reservation />} />
          <Route path="DETAILS" element={<Details />} />
          <Route path="DELETE_ITEM" element={<DeleteItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
