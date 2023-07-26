import React, { useState } from 'react';
import './App.css';
import Data from './Data.json';
function App() {


  const [searcTerm, setSearchTerm]= useState("");

  return (
    <div className='container'>
      <h1>Justice League Birliği</h1>
      <div className='inputContainer'>
        <input className='search' type='text' placeholder='Birlik üyesi giriniz.'
        onChange={(e)=> setSearchTerm(e.target.value)}
        />

      </div>
      <div className='dataContainer'>
        {
          Data
          .filter((val)=>{
            if(searcTerm==""){
              return val;
            }else if(val.title.toLocaleLowerCase().includes(searcTerm.toLocaleLowerCase())){
              return val;
            }
          }).map((val) =>{
            return (
              <div className='data' key={val.id}>
                <img src={val.image} />
                <h3>{val.title}</h3>
                <p>{val.Description}</p>
                </div>
            )
          })
        }

      </div>

    </div>
    
  );
}

export default App;
