import React from 'react';

const Navbar = () => {
  const navlist = [
    'Items',
    'Reserve Form',
    'My Reservation',
    'Add Item',
    'Delete Item',
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
      <div className="social">Social Media Links</div>
    </div>
  );
};

export default Navbar;
