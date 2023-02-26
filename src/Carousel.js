import { data } from './data';
import { useState } from 'react';






const Carousel =()=> {

  const [picture, setPicture] = useState(0);
  const {image} = data[picture];

    
  const backPicture =()=>{
    setPicture((picture=>{
      picture--;
      if(picture<0) {
        return data.length-1;
      }
      return picture;
    }))
  }

  const nextPicture =()=>{
    setPicture((picture=>{
      picture++;
if(picture>data.length-1){
  picture=0;
  }
  return picture;
    }))
  }

    
    return(
    <div className='galleryblock'> 
     
    <button className='btn' onClick={backPicture}>Back</button>
    <div className='image'>
    <img src={image} width="900px" alt="Bild"/>
    </div>
   <button className='btn' onClick={nextPicture}>Next</button>

 
     </div>
    )
    
}






export default Carousel;