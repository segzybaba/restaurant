import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import arrowleft from '../../assets/arrowleft.png';
import arrowright from '../../assets/arrowright.png';

import './gallery.css';

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

function Gallery() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          assumenda culpa inventore, dolore quos exercitationem!
        </p>
        <button type='button' className='custom__button'>
          View More
        </button>
      </div>

      <article className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className='app__gallery-images_card flex__center'
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt='gallery image' />
            </div>
          ))}
        </div>

        <div className='app__gallery-images_arrows'>
          <img
            src={arrowleft}
            alt='left arrow'
            className='gallery__arrow-icon'
            onClick={() => scroll('left')}
          />

          <img
            src={arrowright}
            alt='left arrow'
            className='gallery__arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </article>
    </div>
  );
}

export default Gallery;
