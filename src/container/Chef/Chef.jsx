import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';



const Chef = () => (
    <div className='app__bg app__wrapper section__poadding'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.chef} alt="chef_image" />
        </div>
        <div className="app__wrapper_info section__padding">
          <SubHeading title="Chef's word" />
          <h1 className="headtext__cormorant">What we believe in</h1>
          <div className="chef-content">
            <div className="content-quote">
              <img src={images.quote} alt="quote_image" />
              <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            </div>
            <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. 
            </p>
          </div>
          <div className="chef-sign">
            <p>Jawad Taj</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="sign_image" />
          </div>
        </div>
    </div>
);

export default Chef;
