import React from 'react'

export default function ChildPro({ele}) {

  return (
    <div className='project'>
         <img src={ele.image} alt='img' height={200}  />
         <div className='text'>
            <h3>{ele.title}</h3>
            <p>{ele.desc}</p>
            <a  href={ele.view} > View </a>
         </div>
    </div>
  )
}
