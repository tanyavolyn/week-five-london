import { Componet } from 'react';
import { target } from './target';
import { useState } from 'react';

const [ziele, setZiele] = useState(target);

const removeZiel =(id)=>{
    let newTargets = ziele.filter((ziel)=>ziel.id !== id);
    
    setZiele(newTargets);
    
   
  }

export class MustVisit extends Componet {
    render(){
        {ziele.map((ziel=>{
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
          
          <div className='remall'>
<button className='btn2' onClick={()=>setZiele([])}>Remove all</button>
</div>
              </div>
            )
          }))
          }}}