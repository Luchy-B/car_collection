import React, { useEffect } from 'react';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiPinterest } from 'react-icons/tfi';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user/userSlice';

// eslint-disable-next-line react/prop-types
const Navbar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navlist = [
    { name: 'ITEMS', to: '/' },
    { name: 'RESERVE FORM', to: 'RESERVE_FORM' },
    { name: 'MY RESERVATION', to: 'MY_RESERVATION' },
    { name: 'ADD ITEM', to: 'ADD_ITEM' },
    { name: 'DELETE ITEM', to: 'DELETE_ITEM' },
  ];

  useEffect(() => {
    const handleClickOutsideNavbar = (event) => {
      if (open && !event.target.closest('.navbar') && !event.target.closest('.menu')) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutsideNavbar);

    return () => {
      document.removeEventListener('click', handleClickOutsideNavbar);
    };
  }, [setOpen, open]);

  const handleLogout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('current_user_id');
    navigate('/');
    dispatch(logoutUser());
    window.location.reload();
  };
  return (
    <>
      <div className={open ? 'navbar visible' : 'navbar'}>
        <div className="navlinks-container">
          <Link className="logo" to="/">
            CAR COLLECTION.
          </Link>
          <ul className="navlinks">
            {navlist.map((item) => (
              <NavLink
                className="navlink"
                to={item === 'ITEMS' ? '/' : item.to}
                key={item.name}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <button type="button" className="submit logout" onClick={handleLogout}>
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
