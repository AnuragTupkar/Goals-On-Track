import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet />
    </>
  )
}

export default Layout