import React from 'react';
import HeaderLogo from '../HeaderLogo';
import HeaderSearchInput from './components/HeaderSearchInput';

const Header = () => {
  return (    
    <header>
      <div className='container'>
        <HeaderLogo />
        <HeaderSearchInput />
      </div>
    </header>
  )
};

export default Header;