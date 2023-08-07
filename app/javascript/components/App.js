import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import Main from './auth/Main';
import Navbar from './Navbar/Navbar';
import AddItem from './AddItem';
import Reservation from './Reservation';
import Details from './Details';
import DeleteItem from './DeleteItem';
import Registration from './auth/registration';
import Login from './auth/Login';
import ReserveForm from './ReserveForm';
import Mainpage from './Mainpage';

const App = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(localStorage.getItem('login'));

  const { loggedIn } = useSelector((store) => store.user);

  useEffect(() => {
    setLogin(localStorage.getItem('login'));
  }, [loggedIn]);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const user = {
    id: 1,
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
              <Route path="/" element={<Mainpage />} />
              <Route
                path="RESERVE_FORM"
                element={<ReserveForm user={user} />}
              />
              <Route path="ADD_ITEM" element={<AddItem />} />
              <Route path="MY_RESERVATION" element={<Reservation />} />
              <Route path="DETAILS/:id" element={<Details />} />
              <Route path="DELETE_ITEM" element={<DeleteItem />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
