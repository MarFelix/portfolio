import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='py-8' >
      <div className="container mx-auto">
        <div className='flex justify-end items-center'>
          {/* logo */}
          {/* <a href="#">
            <img src={Logo} alt="" />
          </a> */}
          <button className='btn btn-sm'>Work whit me </button>
        </div>
      </div>
    </header>
  );
 
};

export default Header;
