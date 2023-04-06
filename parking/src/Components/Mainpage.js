import React from 'react'
import Sidebar from './Sidebar'
import './Main.css'
import Navpage from './Navpage'
function Mainpage() {
  return (
    <React.Fragment>
        <section>
        <div className='Nav'>
            <Navpage></Navpage>
        </div>
        </section>
      <section>
      <div className='Main'>
            <Sidebar></Sidebar>
        </div>
      </section>
      
      
      
    </React.Fragment>
  )
}

export default Mainpage
