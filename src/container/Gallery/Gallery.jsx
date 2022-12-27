import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';


const Gallery = () => {

  const scrollRef = useRef(null);
  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  const scroll = (direction) => {

    const { current } = scrollRef;

    if(direction === 'left')
    {
      current.scrollLeft -= 325; 
    }
    else
    {
      current.scrollLeft += 325;
    }

  };
  
  
  return (
    <div className='app__gallery flex__center'>
      <div className="gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__btn">View More</button>
      </div>
      <div className="gallery-images">
        <div className="images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="images-card flex__center" key={`gallery-image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort className="arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="arrow-icon"  onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
