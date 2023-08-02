import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import store from '../store';
import Main from './Main';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem';
import Reservation from './Reservation';
import Details from './Details';
import DeleteItem from './DeleteItem';

const App = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar open={open} setOpen={setOpen} />
        <div className="component">
          <button type="button" className="menu btn" onClick={handleClick}>
            <FiMenu />
          </button>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="ADD ITEM" element={<AddItem />} />
            <Route path="my-reservation" element={<Reservation />} />
            <Route path="DETAILS" element={<Details />} />
            <Route path="DELETE ITEM" element={<DeleteItem />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
