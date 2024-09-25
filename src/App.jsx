import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import './responsive.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { UserDataContextProvider } from '../UserDatatcontext/UserDatatContext'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css" referrerPolicy="no-referrer" />
     {/* react router set up  */}
     <UserDataContextProvider>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' index element={<Home/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>  
     </UserDataContextProvider>
    </div>
  )
}

export default App
