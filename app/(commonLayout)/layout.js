import React from 'react'
import Navbar from '../Component/Navbar'

const CommonLayout = ({children}) => {
  return (
    <div>
          <Navbar></Navbar>
      {children}
    </div>
  )
}

export default CommonLayout
