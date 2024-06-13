import React from 'react'
import CategorySidebar from './[category]/CategorySidebar'

const layout = ({children}) => {
  return (

    <div>
      <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
        <div className='hidden md:block'>
          <CategorySidebar/>
        </div>
        <div className='md:col-span-3'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout
