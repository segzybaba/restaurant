import React from 'react';
import './about.css';
import { images } from '../../constants';
function About() {
  return (
    <div
      className='app__aboutus app__bg flex__center section__padding'
      id='about'
    >
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='Knife Image' />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='spoon image' className='spoon__image' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            maxime, nobis molestias consectetur voluptates libero!
          </p>
          <button className='custom__button'>Know more</button>
        </div>
        <div className='app__aboutus-content_knife flex-center'>
          <img src={images.knife} alt='knife' />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='spoon image' className='spoon__image' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            maxime, nobis molestias consectetur voluptates libero!
          </p>
          <button className='custom__button'>Know more</button>
        </div>
      </div>
    </div>
  );
}

export default About;
