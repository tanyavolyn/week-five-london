
import { target } from './target';
import { useState } from 'react';



const MustVisit =()=> {
  
  const [ziele, setZiele] = useState(target);

  const removeZiel =(id)=>{
      let newTargets = ziele.filter((ziel)=>ziel.id !== id);
      setZiele(newTargets);
  }
  
        
   


            return (
<div>
{ziele.map(((ziele, index) => {
  const{id, name, bild, discription}=ziele;
  return(
  <div className="containeruber" key={id}>
                
          <div className='container'>
          <h2>{index+1} - {name}</h2>
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
          <div className='remall'>
          <button className='btn2' onClick={()=>setZiele([])}>Remove all</button>
          </div>
   </div>
          )
        }))
      }
</div>
)
          }

          export default MustVisit;