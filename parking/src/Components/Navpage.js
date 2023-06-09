import React from 'react'
import { Routes, Route } from "react-router-dom"
import Control from '../Pages/Control'
import Display from '../Pages/Display'
import Events from '../Pages/Events'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Signup from '../Pages/Signup'
function Navpage() {
  return (
   <React.Fragment>
    <section>
      <Routes>
      <Route path="/" element={ <Control/> } />
      <Route path="/Display" element={ <Display/> } />
      <Route path="/Events" element={ <Events/> } />
      <Route path="/Signup" element={<Signup/>} />
    </Routes>
    </section>
   </React.Fragment>
  )
}

export default Navpage
