import React from 'react';
import './descURL.css';
const DescURL = ({text, descText, textSize,descTextSize, image, imageWidth}) => {
//  console.log(textSize, descTextSize, imageWidth)
  return (
    <div className='digencial__descURL'>
        
        <h3 style={{fontSize:{textSize}}} >{text}</h3>
        <p style={{fontSize:{descTextSize}}}>{descText}<img src={image} alt="hyperlink" style={{width:{imageWidth}}}/></p>
        
    </div>
  )
}

export default DescURL