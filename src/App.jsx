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
import Register from './components/auth/Register';

// icons
import { TiHome } from "react-icons/ti";
import { LuListCheck } from "react-icons/lu";
import { BsBagCheckFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useState } from 'react';
function App() {
   const [category,setGategory] = useState(false)
  return (
      <div className=' relative'>
           <Header/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/add-to-cart' element={<AddToCart/>} />
              <Route path='/myaccount' element={<MyAccount/>} />
              <Route path='/product' element={<ProductShow/>} />
              <Route path='/products-result' element={<ProductsResult/>} />
          </Routes>
                  
           {/* bags filter */}
            {category?
           <div className="bags-filter fixed py-10 bg-blue-100 w-full h-96 top-0">
                <div className='p-4'>
                    <div>
                    <h1 className='text-xl haed-style py-1 uppercase'>Category Filter</h1>
                    <div className="category-list font-semibold">
                          <ul>
                              <li className='hover:border-b py-1 border-black flex items-center'><RiShoppingBag4Fill className='ps-1 text-xl' />Shopper or Tote bag</li>
                              <li className='hover:border-b py-1 border-black flex items-center'><RiShoppingBag4Fill className='ps-1 text-xl' />Bowling handbag</li>
                              <li className='hover:border-b py-1 border-black flex items-center'><RiShoppingBag4Fill className='ps-1 text-xl' />Top handle Bag</li>
                              <li className='hover:border-b py-1 border-black flex items-center'><RiShoppingBag4Fill className='ps-1 text-xl' />Satchel</li>
                              <li className='hover:border-b py-1 border-black flex items-center'><RiShoppingBag4Fill className='ps-1 text-xl' />Bucket bag</li>           
                              <li className='hover:border-b py-1 border-black flex items-center'><RiShoppingBag4Fill className='ps-1 text-xl' />Messenger bag</li>           
                              <li className='hover:border-b py-1 border-black flex items-center'><RiShoppingBag4Fill className='ps-1 text-xl' />Backpack</li>           
                          </ul>
                    </div>
                    
                    </div>
                </div>
           </div>:""
            }
           {/*mobile view  */}
           <div className="mobil-view-res block md:hidden fixed bottom-0 p-1 bg-white w-full">
             <div className="container">
                 <div className="flex justify-evenly items-center">
                <div className="icons">
                      <div className="flex justify-center">
                        <TiHome className='text-2xl' />
                      </div>
                    <span className='text-sm'>Home</span>
                </div>
                <div className="icons">
                     <div className="flex justify-center">
                        <LuListCheck className='text-2xl' onClick={()=>setGategory(!category)} />
                     </div>
                    <span className='text-sm'>Category</span>
                </div>
                <div className="icons">
                     <div className="flex justify-center">
                        <BsBagCheckFill className='text-2xl' />
                     </div>
                    <span className='text-sm'>Bags</span>
                </div>
                <div className="icons">
                     <div className="flex justify-center">
                        <BsFillBoxSeamFill className='text-2xl' />
                     </div>
                    <span className='text-sm'>Bags</span>
                </div>
                <div className="icons">
                     <div className="flex justify-center">
                       <VscAccount className='text-2xl' />
                     </div>
                    <span className='text-sm'>Account</span>
                </div>
                 </div>
             </div>
           </div>
      </div>
  )
}

export default App
