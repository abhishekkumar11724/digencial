import React from 'react';
import './services.css';
import {DescURL} from '../../components';
import VectorOpenInNew_w from '../../assets/VectorOpenInNew_w.png';
const Services = () => {
  return (
    <div className='digencial__services section__padding'>
      <div className='digencial__services-content'>
        <h2>OUR SERVICES</h2>
        <p>From website design and development to search engine optimization and social media marketing, we have the expertise and experience to help our clients reach their goals. Our team of dedicated professionals is committed to delivering high-quality results and exceptional customer service</p>
      </div>
      <DescURL text="UI/UX Design" image={VectorOpenInNew_w}/>
      <DescURL text="Graphic Design" image={VectorOpenInNew_w}/>
      <DescURL text="Web Development" image={VectorOpenInNew_w}/>
      <DescURL text="Social Media Managing" image={VectorOpenInNew_w}/>
      
      
    </div>
  )
}

export default Services