import { useEffect, useState } from 'react'
// images
import heroBanner  from "../assets/images/hero_man.png.png";
import bag1 from "../assets/bags/bag-1.png";
import bag2 from "../assets/bags/bag-2.png";
import bag3 from "../assets/bags/bag-3.png";
import styleImage from "../assets/images/card-man.png";
import product from "../assets/bags/bag-18.png";
import offer from "../assets/other/offer-1.png";
import offerBtn from "../assets/other/offer-btn.png";
import { ProductDetailsJson } from '../json/data';
// icons
import { IoMdStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Home = () => {
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
                <div className="home-banner bg-brand-color">
             <div className="container">
                   <div className="flex">
                        <div className="w-full md:w-1/2 flex justify-center">
                             <div>
                                 <img src={heroBanner} className='md:h-96' alt="" />
                             </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center ">
                              <div>
                                  <h3 className='font-style font-style text-blue-500 text-xl'>60% Discount</h3>
                                  <h1 className='haed-style text-xl md:text-7xl '>Winter <br /> Collection</h1>
                                  <p className='haed-style'><i>Best Cloth Collection By 2025</i></p>
                                  <button className='button-48'>Shop Now</button>
                              </div>
                        </div>
                   </div>
             </div>
        </div>
                 {/* Shop by Category */}
                 <div className="shop-by my-5">
                  <h1 className='text-center text-3xl md:text-6xl haed-style font-bold py-10'>Shop by Category</h1>
              <div className=" container mt-4">
                   <div className="flex flex-wrap md:flex-nowrap gap-5">
                         <div className="w-full md:w-1/3" >
                             <div className='p-4 rounded-md' style={{backgroundColor:"#EFF3FF"}}>
                                 <div className="flex">
                                       <div className="w-1/2">
                                           <img src={bag1} className='h-36' alt={brandName} />
                                       </div>
                                       <div className="w-1/2 flex justify-center items-center">
                                           <div>
                                               <h4 className='haed-style'>OWMEN&apos;S</h4>
                                               <button className='btn btn-warning'>Best New Deals</button>
                                               <h5 className='font-style text-blue-600'>New Collection</h5><br /><br />
                                           </div>
                                       </div>
                                 </div>
                             </div>
                         </div>
                         <div className="w-full md:w-1/3" >
                             <div className='p-4 rounded-md' style={{backgroundColor:"#FFDCE4"}}>
                                 <div className="flex">
                                       <div className="w-1/2">
                                           <img src={bag2} className='h-36' alt={brandName} />
                                       </div>
                                       <div className="w-1/2 flex justify-center items-center">
                                           <div>
                                               <h4 className='haed-style'>OWMEN&apos;S</h4>
                                               <button className='btn btn-warning'>Best New Deals</button>
                                               <h5 className='font-style text-blue-600'>New Collection</h5><br /><br />
                                           </div>
                                       </div>
                                 </div>
                             </div>
                         </div>
                         <div className="w-full md:w-1/3" >
                             <div className='p-4 rounded-md' style={{backgroundColor:"#EEF6FF"}}>
                                 <div className="flex">
                                       <div className="w-1/2">
                                           <img src={bag3} className='h-36' alt={brandName} />
                                       </div>
                                       <div className="w-1/2 flex justify-center items-center">
                                           <div>
                                               <h4 className='haed-style'>OWMEN&apos;S</h4>
                                               <button className='btn btn-warning'>Best New Deals</button>
                                               <h5 className='font-style text-blue-600'>New Collection</h5><br /><br />
                                           </div>
                                       </div>
                                 </div>
                             </div>
                         </div>
                   </div>
              </div>
         </div>
          <div className="my-5">
    <div className='container py-5'>
             <div className="rounded-md pt-5" style={{backgroundColor:"#FFF6D9"}}>
                  <div className="flex">
                       <div className="w-1/2">
                           <div className='flex justify-center items-center'> 
                                <img src={styleImage} className='h-36 md:h-96' alt="" />
                           </div>
                       </div>
                       <div className="w-1/2 flex justify-center items-center">
                             <div>
                                <div className='flex justify-center items-center'>
                                 <div>
                                  <h1 className='haed-style text-sm md:text-5xl'>Find The Best Product <br /> from Our Shop</h1>
                                  <p className='fw-bold text-sm'>Designers who are interesten creating state ofthe.</p>
                                  <button className='button-48 rounded bg-primary text-white'>Shop Now</button>
                                 </div>
                                 <div>
                                      <img src={product} className='h-12' alt="" />
                                 </div>
                                </div>
                             </div>
                       </div>
                  </div>
             </div>
         </div>

          </div>
         {/* offer shop */}
           <div className="my-5 p-2">
            <div className="offer-price container my-5 p-3 rounded">
                    <div className="">
                        <div className="flex justify-between md:justify-evenly items-center">
                            <div>
                                <img src={offerBtn} className='h-10 md:h-14' alt={brandName} />
                            </div>
                            <div className='offer-list flex gap-2 md:gap-5 p-2'>
                            <div>
                                    <img src={offer} className='h-28 md:h-96 rounded-lg' alt={brandName} />
                                    <div className='my-3 flex justify-center items-center'>
                                        <h1 className='bg-gray-300 w-auto md:w-28 text-xs cursor-pointer p-1 text-center md:py-2 rounded hover:text-white'>Buy Now</h1>
                                    </div>
                                </div>
                                <div>
                                    <img src={offer} className='h-28 md:h-96 rounded-lg' alt={brandName} />
                                    <div className='my-3 flex justify-center items-center'>
                                        <h1 className='bg-gray-300 w-auto md:w-28 text-xs cursor-pointer p-1 text-center md:py-2 rounded hover:text-white'>Buy Now</h1>
                                    </div>
                                </div>
                                <div>
                                    <img src={offer} className='h-28 md:h-96 rounded-lg' alt={brandName} />
                                    <div className='my-3 flex justify-center items-center'>
                                        <h1 className='bg-gray-300 w-auto md:w-28 text-xs cursor-pointer p-1 text-center md:py-2 rounded hover:text-white'>Buy Now</h1>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
            </div>

           </div>
           {/* Products For You */}
            <div className="product-list my-5">
                <div className="container">
              <h1 className='haed-style text-2xl md:text-5xl py-5'>Products For You</h1>
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
            {/* product-video */}  
                  
    </div>
  )
}

export default Home
