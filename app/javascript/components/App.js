import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import Main from './Main';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem';
import Reservation from './Reservation';
import Details from './Details';
import DeleteItem from './DeleteItem';
import Registration from './auth/registration';
import Login from './auth/Login';

const App = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(localStorage.getItem('login'));

  const { loggedIn } = useSelector((store) => store.user);

  useEffect(() => {
    setLogin(localStorage.getItem('login'));
  }, [loggedIn]);

  console.log(localStorage.getItem('login'));
  console.log('login', login);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {login ? (
        <>
          <Navbar open={open} setOpen={setOpen} />
          <div className="component">
            <button type="button" className="menu btn" onClick={handleClick}>
              <FiMenu />
            </button>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="ADD ITEM" element={<AddItem />} />
              <Route path="MY RESERVATION" element={<Reservation />} />
              <Route path="DETAILS" element={<Details />} />
              <Route path="DELETE ITEM" element={<DeleteItem />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
