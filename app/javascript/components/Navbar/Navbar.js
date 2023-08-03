import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiPinterest } from 'react-icons/tfi';
import { NavLink, Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user/userSlice';

// eslint-disable-next-line react/prop-types
const Navbar = ({ open, setOpen }) => {
  const dispatch = useDispatch;
  const navlist = [
    'ITEMS',
    'RESERVE FORM',
    'MY RESERVATION',
    'ADD ITEM',
    'DETAILS',
    'DELETE ITEM',
  ];
  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('current_user');
    window.location.reload();
    dispatch(logoutUser());
  };
  return (
    <>
      <div className={open ? 'navbar visible' : 'navbar'}>
        <div className="navlinks-container">
          <button type="button" className="close" onClick={handleClick}>
            <GrClose />
          </button>
          <Link className="logo" to="/">
            CAR COLLECTION.
          </Link>
          <ul className="navlinks">
            {navlist.map((item) => (
              <NavLink
                className="navlink"
                to={item === 'ITEMS' ? '/' : item}
                key={item}
              >
                {item}
              </NavLink>
            ))}
          </ul>
        </div>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
        <div className="social">
          <a href="#chris" target="_blank" rel="noreferrer">
            <AiOutlineTwitter className="icon" />
          </a>
          <a href="#chris" target="_blank" rel="noreferrer">
            <ImFacebook className="icon" />
          </a>
          <a href="#chris" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="#chris" target="_blank" rel="noreferrer">
            <AiFillInstagram className="icon" />
          </a>
          <a href="#chris" target="_blank" rel="noreferrer">
            <TfiPinterest className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
