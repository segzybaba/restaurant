import React from 'react';

import images from '../../constants/images';
import './navbar.css';
import menubar from '../../assets/menuss.svg';
import closebar from '../../assets/closeIcon02.png';

const MainMenu = () => (
  <>
    <li className='p__opensans'>
      <a href='#home'>Home</a>
    </li>
    <li className='p__opensans'>
      <a href='#about'>About</a>
    </li>
    <li className='p__opensans'>
      <a href='#menu'>Menu</a>
    </li>
    <li className='p__opensans'>
      <a href='#awards'>Awards</a>
    </li>
    <li className='p__opensans'>
      <a href='#contact'>Contacts</a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app__logo' />
      </div>
      <ul className='app__navbar-links'>
        <MainMenu />
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>
          Log In / Register
        </a>
        <div></div>
        <a href='#login' className='p__opensans'>
          Book Table
        </a>
      </div>
      <div className='app__navbar-smallscreen'>
        <img
          src={menubar}
          alt='Menu Bar'
          className='icon-img'
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <img
              src={closebar}
              alt='Menu Bar'
              className='icon-img overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen-links'>
              <MainMenu />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
