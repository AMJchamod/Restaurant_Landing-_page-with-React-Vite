import React from 'react';
import {images} from '../../constants'; 
import '../Header/Headercss.css';

export default function SubHeading(props) {
  return (
     <div style={{marginBottom:'1rem'}}>

           <p className='Cormorant subheading_p'>{props.title}</p>
           <img src={images.spoon}></img>
    </div>
   
  )
}
