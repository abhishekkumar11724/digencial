import React from 'react'
import { DescURL } from '../../components'
import VectorOpenInNew_w from '../../assets/VectorOpenInNew_w.png'
import logo_blue from '../../assets/logo_blue.png'
import './footer.css'
const Footer = () => {
  return (
    <div className='digencial__footer section__padding'>
      <div className='digencial__footer-content'>
        <div className='digencial__footer-content_description'>
          
          <h3><img src={logo_blue} alt="logo" />Digencial</h3>
          <p>Digencial is a digital agency that provides a range of digital solutions to help businesses grow and succeed in the digital world. We offer a wide range of services including website design, web development, and social media management.</p>
        </div>
        <div className='digencial__footer-content_forwardURL'>
            <DescURL text="E_MAIL" textSize='20px' descText="info@digencial.com" descTextSize='24px' image={VectorOpenInNew_w} imageHeight='18px'/>
            <DescURL text="INSTAGRAM" textSize='20px' descText="dignecial" descTextSize='24px' image={VectorOpenInNew_w} imageHeight='18px'/>
            <DescURL text="TWITTER" textSize='20px' descText="dignecial" descTextSize='24px' image={VectorOpenInNew_w} imageHeight='18px'/>
            <DescURL text="LINKDEIN" textSize='20px' descText="dignecial" descTextSize='24px' image={VectorOpenInNew_w} imageHeight='18px'/>
        </div>
      </div>
      <div className='digencial__footer-copyright'>
          <DescURL  descText="Term of Agreement" image={VectorOpenInNew_w} imageHeight='18px'/>
          <p>2023 | All rights reserved</p>
          <DescURL descText="Privacy & Policy" image={VectorOpenInNew_w} imageHeight='18px'/>
          
      </div>
    </div>
  )
}

export default Footer