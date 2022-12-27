import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="header-h1">The Key to Fine Dinning</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__btn">Explore Menu</button>
    </div>
    <div className="app__wrapper-img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
