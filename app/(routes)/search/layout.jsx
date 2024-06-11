import React from 'react'

const layout = ({children}) => {
  return (

    <div>
      <div className='grid grid-cols-4'>
        <div className='bg-blue-100'>
          category
        </div>
        <div className='col-span-3 bg-red-100'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout
