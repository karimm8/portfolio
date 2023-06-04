import React from 'react';
import ChildPro from './ChildPro';
import './Project.css';
import data from './data.json';
export default function Project() {
  return (
    <div className='projects'>
      <h2>My Projects</h2>
      {
        data.map((e , i) => {
          return <ChildPro key={i} ele={e} />
        })
      }
       
    </div>
  )
}
