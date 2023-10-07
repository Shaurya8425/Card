import React from 'react'
import Discription from './Components/Discription'
import QuickDetails from './Components/QuickDetails'
import Footer from './Components/Footer'
import './style.css'

function App() {
  return (
    <div className="box">
        <div className='container'>
        <QuickDetails/>
        <Discription/>
        <Footer/>
    </div>
    </div>
  )
}

export default App