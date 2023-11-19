import React from 'react';
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
function Newsletter() {
  return (
    <section className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Please Enter Your Email Address' />
        <button className='custom__button'>Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;
