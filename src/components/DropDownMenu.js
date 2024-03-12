import React, { useState } from 'react';

const DropdownMenu = ({links}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-toggle">
        {links.title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href= {links.link1}>{links.option1}</a></li>
          <li><a href= {links.link2}>{links.option1}</a></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;