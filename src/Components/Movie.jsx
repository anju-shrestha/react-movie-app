import React from 'react'

function Movie({title, year, img}) {
  return (
    <div className='bg-gray-100 text-center justify-center p-4 border border-gray-400 font-bold w-[200px] mb-2 text-[12px]'>
        <img 
            className='h-[180px] w-[100%]'
            src={img}
            alt='poster' 
         />
        <p>{title}</p>
        <p>Year: {year}</p>
    </div>
  )
}

export default Movie
