import React from 'react'
import Navbars from '../components/Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import Call from './call/Call'

function Layout() {
  return (
<>
<Navbars></Navbars>
<Outlet></Outlet>
<Call></Call>
<Footer></Footer>
</>
  )
}

export default Layout