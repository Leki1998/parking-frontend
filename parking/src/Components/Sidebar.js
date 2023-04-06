import React from 'react'
import Logo from '../Imgs/Logo.png'
import {Data} from'../Data/Data.js'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='Sidebar1'>
        <img src={Logo} className='Logo' alt='logo/'></img>
        <div className='menu'>
            <ul className='sidebarlist'>
            {Data.map((val,key)=>{
                return<li key={key} className="row">
                   
                   <div id='icon'>
                   <NavLink to={val.link} className="White">{val.icon} </NavLink>
                   </div>
                    <div id="title">
                    <NavLink to={val.link} className="White">{val.title}
                    </NavLink>
                    </div>
                  
                   </li>
                    })}
            </ul>
         
            
        </div>
    </div>
  )
}

export default Sidebar
