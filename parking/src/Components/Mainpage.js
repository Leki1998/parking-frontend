import React from 'react'
import Sidebar from './Sidebar'
import './Main.css'
import Navpage from './Navpage'
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
function Mainpage() {
  return (
    <React.Fragment>
      <div className="main-wrapper">
          <div className='Main'>
              <Sidebar></Sidebar>
          </div>
          <div className='Nav'>
              <Navpage></Navpage>
              {/*<Login></Login>*/}
              {/*<Signup></Signup>*/}
          </div>
      </div>
    </React.Fragment>
  )
}

export default Mainpage
