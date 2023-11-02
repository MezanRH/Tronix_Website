
import { Outlet } from 'react-router-dom'
import Navbar from '../component/layout/Navbar'
import Topbar from '../component/layout/Topbar'
import Footer from './layout/Footer'

const RootLayout = () => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout