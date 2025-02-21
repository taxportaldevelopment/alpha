import { useEffect, useState } from 'react'
import { ProductDetailsJson } from '../json/data';
import { useNavigate } from 'react-router-dom';

// icons
import { IoMdStarOutline } from "react-icons/io";

const ProductsResult = () => {

    const [productShow,setProductShow] = useState();

       useEffect(()=>{
          function getAllProducts(){
            setProductShow(ProductDetailsJson.itemsOne)
          };
          getAllProducts();
       },[])
    const brandName = "Bags";
     const navigate = useNavigate();
  return (
    <div>
        <div className="product-search-filter">
                 <div className="p-1">
                 <h1 className='font-normal haed-style text-2xl py-2 px-3'>Results</h1>
              <p className='px-3'>Check each product page for other buying options. Price and other details may vary based on product size and colour.</p>
                 </div>
               <div className="flex">
               <div className=' w-full md:w-4/5 p-2 '>
                    <div>
                        <div className="product-list my-5">
                                    <div className="product-for-you">
                         
                                           {productShow?.map((items,index)=>(
                                               <div className="product-cart box-shadow-box rounded-md cursor-pointer" onClick={()=>navigate("/product")} key={index}>
                                                    <div className="images object-cover h-60">
                                                         <img src={items} className='w-full object-contain h-full p-1' alt="" />
                                                    </div>
                                                    <div className="details p-2">
                                                          <h5 className='product-font whitespace-nowrap md:w-56 text-ellipsis overflow-hidden opacity-60'>Casual Vegan Leather Office College Laptop Shoulder Business Unisex</h5>
                                                          <h1 className='text-2xl font-bold'>$200</h1>
                                                          <div><span className='p-1 bg-gray-100 text-xs rounded-md'>Free Delivery</span></div>
                                                    </div>
                                                     <div className="rating p-2">
                                                          <div className='flex  items-center'>
                                                          <span className='w-14 flex text-center bg-green-600 rounded-lg text-white px-2'>3.9
                                                          <IoMdStarOutline className='text-xl' />
                                                          </span>
                                                             <span className='text-xs ms-2'>32777 Reviews</span>
                                                          </div>
                                                     </div>
                                               </div>
                                           ))}
                                    </div>
                         
                                     </div>
                    </div>
               </div>
               <div className='hidden md:block w-auto p-2 border-l '>
                   <div className='p-2'>
                       <h6 className='py-2 font-bold text-blue-500'>Eligible for Free Shipping</h6>
                       <p>FREE Shipping</p>
                       <div className="filter-gender-search">
                            <h1 className='py-1 font-bold'>Gender</h1>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Men</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Women</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Girls</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Unisex</span>
                            </div>
                       </div>
                   </div>
                   <div className="p-2">
                       <h1 className='font-bold text-1xl'>Price</h1>
                       <div className="flex justify-between items-center">
                           <input type="range" className='py-2' name="" id="" />
                           <span className='px-2 bg-gray-200 rounded-lg'>Go</span>
                       </div>
                       <div>
                           <p className='text-blue-400'>Reset price range</p>
                           <strong>Deals & Discounts</strong><br />
                           <span>All Discounts</span>
                           <div className="filter-descrip-search">
                            <h1 className='py-1 font-bold'>Lining Description</h1>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Leather</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Cotton</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Faux Leather</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Polyester</span>
                            </div>
                       </div>
                       </div>
                       {/* Included Components */}
                       <div>
                           <p className='py-2'><strong>Included Components</strong></p>
                           <div className="filter-descrip-search">
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Clutch</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Crossbody Bag</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Keychain</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Messenger Bag</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Wallet</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Wristlet</span>
                            </div>
                         </div>
                         {/* capacity */}
                          <div className="capacity">
                             <p className='py-2'><strong>Capacity</strong></p>
                             <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>2.0 to 2.9 L</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>3.0 L & above</span>
                            </div>
                          </div>
                          {/* closure type */}
                          <div className="closure-type">
                             <p className='py-2'><strong>Closure Type</strong></p>
                             <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Zipper</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Buckle</span>
                            </div>
                            <div className='flex items-center'>
                                 <input type="checkbox" className='w-4 h-5' name="" id="" />
                                 <span className='ms-2'>Magnetic</span>
                            </div>
                          </div>
                       </div>
                   </div>

               </div>
               </div>
        </div>
    </div>
  )
}

export default ProductsResult
