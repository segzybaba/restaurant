import React from 'react';
import './header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
function Header() {
  return (
    <section className='app__header app__wrapper section__padding' id='home'>
      <article className='app__wrapper_info'>
        <SubHeading title='Chase the new flavor' />
        <h1 className='app__header-h1'>The key to fine dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          repellat ipsum aliquam eius, ea repudiandae.
        </p>
        <button className='custom__button' type='button'>
          Explore Menu
        </button>
      </article>

      <article className='app__wrapper_img'>
        <img src={images.welcome} alt='welcome' />
      </article>
    </section>
  );
}

export default Header;
