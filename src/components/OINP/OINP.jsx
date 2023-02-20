import React from 'react';
import './OINP.css';

const OINP = ({text, textColor, background, image, borderColor }) => {
  const digencial__oinp_styles =  {
    backgroundColor: {background},
     color: {textColor},
      border: `1px solid ${borderColor}`,
  }
  return (
    <div className='digencial__oinp' >
        <button style={digencial__oinp_styles}>
          <p>{text}</p>
          <img src={image} alt="forwarded logo" />
        </button>
    </div>
  )
}

export default OINP