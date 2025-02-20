// import {useQuery} from "@tanstack/react-query";
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/layout/Header'
import ProductShow from './ProductShow'


function App() {

  return (
      <div>
           <Header/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/product' element={<ProductShow/>} />
          </Routes>
                  
           
      </div>
  )
}

export default App
