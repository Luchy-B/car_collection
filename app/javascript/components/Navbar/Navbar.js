import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiPinterest } from 'react-icons/tfi';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const navlist = [
    'ITEMS',
    'RESERVE FORM',
    'MY RESERVATION',
    'ADD ITEM',
    'DETAILS',
    'DELETE ITEM',
  ];
  return (
    <div className="navbar">
      <div className="navlinks-container">
        <Link to="/">
          <h2>Car collection</h2>
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
  );
};

export default Navbar;
