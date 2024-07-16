import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl p-4 mx-auto'>
      {children}
    </div>
  )
}

export default Container
