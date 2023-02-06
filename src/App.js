//import { useState } from 'react';
//import { data } from './data';
//import { target } from './target';
import { Carousel } from "./Carousel";
import { MustVisit } from "./MustVisit";
import './App.css';

function App() {
/*   const [picture, setPicture] = useState(0);
  const [ziele, setZiele] = useState(target);
  const {image} = data[picture]; */

//const indexArr = ziele.map((id, index)=>id.index);






 /*  const backPicture =()=>{
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
  } */

/*   const removeZiel =(id)=>{
    let newTargets = ziele.filter((ziel)=>ziel.id !== id);
    
    setZiele(newTargets);
    
   
  } */
  return (
    <div className='App'>

      <div>
        <h1>LONDON <span className="titeltwo">Meine Reiseziele</span></h1>
      </div>
<Carousel/>
<MustVisit/>
{/*       <div className='galleryblock'> 
     
      <button className='btn' onClick={backPicture}>Back</button>
      <div className='image'>
      <img src={image} width="900px" alt="Bild"/>
      </div>
     <button className='btn' onClick={nextPicture}>Next</button>

   
       </div> */}



{/* {ziele.map((ziel=>{
  const{id, name, bild, discription} = ziel;
  return(
    <div className="containeruber" key={id}>
<div className='container'>
  <h2>{id} - {name}</h2>
</div>
<div className='container'>
  <img src={bild} alt="Bild" width="600px"/>
</div>
<div className='container'>
  <p>{discription}</p>
</div>

<div className='container'>
  <button className='btn2' onClick={()=>removeZiel(id)}>Remove</button>
</div>

    </div>
  )
}))
} */}

{/* <div className='remall'>
<button className='btn2' onClick={()=>setZiele([])}>Remove all</button>
</div> */}



    </div>
  );
}

export default App;
