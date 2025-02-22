// import {useQuery} from "@tanstack/react-query";
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Header from './components/layout/Header';
import ProductShow from './ProductShow';
import ProductsResult from './components/ProductsResult';
import Login from './components/auth/Login';
import AddToCart from './components/AddToCart';
import MyAccount from './components/account/MyAccount';


function App() {

  return (
      <div>
           <Header/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/add-to-cart' element={<AddToCart/>} />
              <Route path='/myaccount' element={<MyAccount/>} />
              <Route path='/product' element={<ProductShow/>} />
              <Route path='/products-result' element={<ProductsResult/>} />
          </Routes>
                  
           
      </div>
  )
}

export default App
