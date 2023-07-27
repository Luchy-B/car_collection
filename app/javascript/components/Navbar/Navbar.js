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
        <AiOutlineTwitter className="icon" />
        <ImFacebook className="icon" />
        <FaLinkedinIn className="icon" />
        <AiFillInstagram className="icon" />
        <TfiPinterest className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
