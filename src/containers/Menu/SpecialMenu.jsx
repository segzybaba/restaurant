import React from 'react';
import { useState } from 'react';
import { images, data } from '../../constants';
import { SubHeading, Menu } from '../../components';
import './specialmenu.css';
function SpecialMenu() {
  return (
    <section
      className='app__specialMenu flex__center section__padding'
      id='menu'
    >
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu That Fits Your Palatte' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <article className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu-menu_items'>
            {data.wines.map((wine, index) => {
              // const {title, price, tag, id} = wine
              return (
                <Menu
                  key={wine.title + index}
                  title={wine.title}
                  tags={wine.tags}
                  price={wine.price}
                />
              );
            })}
          </div>
        </div>
        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt='menu image' />
        </div>
        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className='app__specialMenu-menu_items'>
            {data.cocktails.map((cocktail, index) => {
              // const {title, price, tag, id} = wine
              return (
                <Menu
                  key={cocktail.title + index}
                  title={cocktail.title}
                  tags={cocktail.tags}
                  price={cocktail.price}
                />
              );
            })}
          </div>
        </div>
      </article>
      <div style={{ marginTop: '15px' }}>
        <button type='button' className='custom__button'>
          view more
        </button>
      </div>
    </section>
  );
}

export default SpecialMenu;
