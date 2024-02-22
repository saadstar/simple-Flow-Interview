import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import './navbar.scss';

export const Navbar = () => {
  return (
      <div className='navBar'>
          <div className="navContainer">              
          <div className='left'>
              <MenuIcon className='none'  />
          <img src='./images/avatar.jpeg' alt='avatar'/>
              <Brightness4Icon className='icon'/>
              <SearchIcon className='icon'/>
          </div>
          <div className='right'>
              <img src='./images/logo.png' alt='avatar' />
              <MenuIcon className='icon'/>
          </div>
          </div>
    </div>
  )
}
