import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiPinterest } from 'react-icons/tfi';

const Navbar = () => {
  const navlist = [
    'ITEMS',
    'RESERVE FORM',
    'MY RESERVATION',
    'ADD ITEM',
    'DELETE ITEM',
  ];
  return (
    <div className="navbar">
      <div className="navlinks-container">
        <h2>Car collection</h2>
        <ul className="navlinks">
          {navlist.map((item) => (
            <li className="navlink" key={item}>
              {item}
            </li>
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
