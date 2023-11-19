import React from 'react';
import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

import './footer.css';
function Footer() {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact</h1>
          <p className='p__opensans'>22 Eastman Drive, Toronto, Canada</p>
          <p className='p__opensans'>+1437-428-5789</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt='footer logo' className='footer-logo' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, earum?
          </p>
          <img src={images.spoon} alt='spoon' style={{ marginTop: '15' }} />
          <div className='app__footer-links_icons'>
            <img src={facebook} alt='' />
            <img src={twitter} alt='' />
            <img src={instagram} alt='' />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday</p>
          <p className='p__opensans'>08:00am - 12:00am</p>
          <p className='p__opensans'>Saturday-Sunday</p>
          <p className='p__opensans'>07:00am - 11:00pm</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>2024 All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
