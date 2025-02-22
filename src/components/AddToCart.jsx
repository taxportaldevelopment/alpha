// icons
import { IoCloseSharp } from "react-icons/io5";
// images
import image from "../assets/add-to-cart.png"
import img1 from "../assets/images/img-3.jpg"
const AddToCart = () => {
  return (
    <div>
         <div className="container">
                <h1 className="py-3 text-2xl">Product Details</h1>
               <div className="flex flex-wrap">
                   <div className="w-full md:w-3/5 border-r p-3 md:flex justify-center">
                        <div className="flex flex-col">
                        <div>
                           <div className="border p-2 mt-3">
                        <div className="flex justify-between ">
                              <div className="image w-16 md:w-20 p-1">
                                  <img src={img1} className="object-contain rounded-md" alt="" />
                              </div>
                              <div className="product-details w-96">
                                   <div className="flex justify-between items-center">
                                   <p className="py-1 ps-2 text-xs lg:text-xl md:w-72">Coffee Lycra Blend Saree With Blouse</p>
                                   <span className="text-purple-500 font-bold cursor-pointer">Edit</span>
                                   </div>
                                 <div className="p-2">
                                 <p className="font-bold md:text-2xl">₹292</p>
                                 <p>Bag Size: Free Size Qty: 1</p>
                                  <div className="md:mt-2 flex justify-end border-t">
                                      <div className="flex items-center opacity-80 cursor-pointer">
                                          <IoCloseSharp className="text-2xl"/>
                                          <span>Remove</span>
                                      </div>
                                  </div>
                                  <div>
                                      
                                  </div>
                                 </div>
                              </div>
                        </div>
                           </div>
                        </div>

                        </div>

          
                   </div>
                   
                   <div className="p-2 w-full md:w-96">
                        <div>
                              <h1 className="py-1 font-medium">Price Details (2 Items)</h1>
                              <div className="order-total border-t mt-2 p-2 flex justify-between">
                                  <strong>Order Total</strong>
                                  <strong className="font-semibold">₹1000</strong>
                              </div>
                               <div className="payment" style={{backgroundColor:"#f8f8ff"}}>
                                    <h1 className="text-xs py-2 text-center">Clicking on &apos;Continue&apos; will not deduct any money</h1>
                               </div>
                              <div className="images">
                                     <img src={image} alt="" />
                              </div>
                        </div>
                   </div>
               </div>
         </div>
    </div>
  )
}

export default AddToCart
