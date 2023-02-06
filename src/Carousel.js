import { data } from './data';
import { Componet } from 'react';
import { useState } from 'react';

const {image} = data[picture];
const [picture, setPicture] = useState(0);


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

export class Carousel extends Componet {
    
render(){
    
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





}