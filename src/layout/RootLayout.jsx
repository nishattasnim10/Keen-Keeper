import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

function RootLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
      <ToastContainer />
    </div>
  )
}

export default RootLayout