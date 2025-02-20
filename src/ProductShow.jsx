import img1 from "./assets/images/img-1.jpg";
import img2 from "./assets/images/img-2.jpg";
import img3 from "./assets/images/img-3.jpg";
import img4 from "./assets/images/img-4.jpg";
import img5 from "./assets/images/img-5.jpg";
import img6 from "./assets/images/img-6.jpg";
// second 
import image1 from "./assets/image-two/image-1.jpg";
import image2 from "./assets/image-two/image-2.jpg";
import image3 from "./assets/image-two/image-3.jpg";
import image4 from "./assets/image-two/image-4.jpg";
import image5 from "./assets/image-two/image-5.jpg";
import image6 from "./assets/image-two/image-6.jpg";
import { useEffect, useRef, useState } from "react";
// icons

const ProductShow = () => {
    var productStatus = 1;
    const [productShow,setProduct] = useState([img1,img2,img3,img4,img5,img6]);
    const productRef = useRef(null);
    const [currentProduct,setCurrentProduct] = useState(img1)
    const product = [img1,img2,img3,img4,img5,img6];
    const product1 = [image1,image2,image3,image4,image5,image6];
     const changeproduct = (items)=>{
           productStatus = items
           if(productStatus == 1){
            return setProduct(product)
          }else{
             return setProduct(product1)
             
          }
     }
    const getProductId = (id)=>{

        setCurrentProduct(productShow[id])
    }
    useEffect(()=>{
      function getRefresh(){
         window.scrollTo(0, 0);
     }
     getRefresh()
 },[])
  return (
    <div>
       <div className="product-list-show">
             <div className="container p-4">
                   <div className="flex flex-wrap">
                   <div className='w-full md:w-1/2 p-2 '>
                     <div className="flex items-center">
                       <div className='w-14 hidden md:block'>
                           {productShow.map((items,index)=>(
                               <div key={index}  className="m-1 border rounded border-gray-500">
                                    <img src={items} onMouseEnter={()=>getProductId(index)} data-product={index} ref={productRef} className="rounded" alt="" />
                               </div>
                           ))}
                       </div>
                           <div className="p-3 border">
                               <img src={currentProduct} className="w-auto" alt="" />
                           </div>
                     </div>
                   </div>
                   <div className='w-full md:w-1/2 p-3'>
                       <div className="title-section border-b-2 border-black-500">
                         <a href="#" className="text-blue-600">Visit the OVER EARTH Store</a>
                        <h2 className="md:text-2xl py-1">Soft Leather Handbags for Women Shoulder Hobo Bag Large Tote Crossbody Bag By OVER EARTH</h2>
                         <div className="rating-star flex mt-2">
                          <div>
                            <span>4.4</span>
                         </div>  
                          <div className="flex">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

                          </div>
                           <div className="rating-view text-blue-500 text-xs md:text-lg ms-1">
                              <a href="#"><span>744 rating</span> </a>|
                              <a href="#"><span> Search this page</span></a>
                           </div>
                         </div>
                       </div>
                          <div className="flex flex-wrap border-b-2 border-black-500">
                          <div className="left-site w-full md:w-1/2">
                           <div className="price-section p-2">
                               <h1 className="text-2xl">$150 <sup className="text-xs">80</sup></h1>
                           </div>   
                           <div className="coupon-section py-2">
                                 <div className="coupon flex items-center">
                                     <span className="bg-yellow-500 px-1 rounded font-bold">coupon:</span>
                                     <div className="check-box ms-3">
                                          <input type="checkbox" className="w-4 h-4" name="" id="coupon-sec" />
                                          <label htmlFor="coupon-sec" className="text-xs md:text-lg ms-2 cursor-pointer">12% off coupon applied</label>
                                     </div>
                                 </div>
                           </div>
                           <div className="bags-colors py-2">
                                <h6><strong>Colour Name : </strong>Block</h6>
                                 <div className="flex gap-2">
                                    <div className="first-product flex items-center cursor-pointer" onClick={()=>changeproduct(1)}>
                                     <div className="border flex justify-between px-5 py-2">
                                     <img src={img1} className="h-7" alt="" />
                                     <span>139.80</span>
                                     </div>
                                    </div>
                                    <div className="first-product flex items-center cursor-pointer" onClick={()=>changeproduct(2)}>
                                     <div className="border flex justify-between px-5 py-2">
                                     <img src={image1} className="h-7" alt="" />
                                     <span>139.80</span>
                                     </div>
                                    </div>
                                 </div>
                           </div>
                           <div className="product-details w-full md:w-96 p-1">
                              <div>
                                <h6 className="font-bold">Product details</h6>
                                <ul className="pt-3 w-full md:w-96">
                                    <li className="py-1">
                                        <div className="flex justify-between">
                                               <strong>Fabric type </strong>
                                               <span> Fabric type</span>
                                        </div>
                                    </li> 
                                    <li className="py-1">
                                        <div className="flex justify-between">
                                               <strong>Closure type </strong>
                                               <span> Zipper</span>
                                        </div>
                                    </li> 
                                    <li className="py-1">
                                        <div className="flex justify-between">
                                               <strong>Lining</strong>
                                               <span>Polyester</span>
                                        </div>
                                    </li> 
                                    <li className="py-1">
                                        <div className="flex justify-between">
                                               <strong>Item display dimensions</strong>
                                               <span className="text-xs">36.8 x 11.4 x 27.9 Centimetres</span>
                                        </div>
                                    </li> 
                                    <li className="py-1">
                                        <div className="flex justify-between">
                                               <strong>Country of origin</strong>
                                               <span>China</span>
                                        </div>
                                    </li> 
                                </ul>
                              </div>
                           </div>
                          </div>
                          <div className="right-site w-full md:w-1/2">
                               <div className="free-delivery p-2">
                                   <p className="flex items-center"><a href="#" className="text-blue-500 px-1">FREE delivery </a> Sunday, February 23 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</p>
 <h5 className="text-xl my-1 text-green-500">In Stock</h5>
   <div className="quantity">
        <select name="" id="" className="border w-40 py-1 rounded">
            <option value="">Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
   </div>
   <div className="order-details py-2">
        <button className="border px-5 py-1 bg-yellow-400 hover:bg-yellow-300 rounded-lg">Add To Cart</button>
        <button className="border px-5 py-1 bg-orange-500 hover:bg-orange-400 rounded-lg ms-1">Buy Now</button>
   </div>
                               </div>
                          </div>

                          </div>
                          {/*About this item  */}
                       <div className="product-about py-2">
                           <h1><strong>About this item</strong></h1>
                           <ul className="list-disc">
                              <li className="py-1">
                                 <p>Large Purse: This is a LARGE handbag,Please note with that before confirm your order. The size please refer to the dimensional reference drawing. This large capacity genuine soft leather can fit up to your 12.9 inch iPad, A4 file and other essentialsl. Suitable for shopping, working, traveling and daily use.</p>
                              </li>
                              <li className="py-1">
                                <p>Material: This women shoulder bag made of top grain first layer cowhide leather (genuine leather) with pebbled texture;Brown color polyester lining; High quality silver metal color hardware.</p>
                              </li>
                              <li className="py-1">
                                 <p>Size and Weight: Dimensions Approx :13.3(H) x 4(W) x 11(H),Large woemn handbag.Double handles height: 8.07 inch. Shoulder strap: 21.2 to 24.2 length removable crossbody shoulder strap. The weight is about 1.9 pounds/0.87 kg</p>
                              </li>
                           </ul>
                        </div>   
                   </div>    
                   </div>
             </div>
       </div>
    </div>
  )
}

export default ProductShow
