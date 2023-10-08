import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import  { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Nav></Nav>
      <Outlet></Outlet>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  )
}

export default App
