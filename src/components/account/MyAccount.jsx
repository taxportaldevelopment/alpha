// images
import profile from "../../assets/user/user-icon.png";
// icons
import { ImFolderUpload } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";
const MyAccount = () => {
  return (
    <div className='bg-gray-200'>
        <div className="my-account container p-3 md:flex gap-x-4 ">
              <div className="p-2 border w-full md:w-72">
                    <div className="p-3 flex items-center bg-white">
                         <div className="w-12">
                              <img src={profile} alt="" />
                         </div>
                         <h1 className='ms-2 font-bold'>Hello</h1>
                    </div>
              {/* account */}
              <div className='mt-3 bg-white'>
               <div className="account-pay ">
                   <div className="my-order-items p-2 py-5 flex justify-between">
                        <div className='flex items-center'>
                           <ImFolderUpload className='text-blue-700 text-xl' />
                           <h1 className='ms-3 font-bold opacity-50'>MY ORDERS</h1>
                        </div>
                        <div>
                          <IoIosArrowForward />
                        </div>
                   </div>
               </div>
                  <div className="icons p-2 py-3 border-t border-b">
                      <div className='flex'>
                          <FaUser className="text-blue-700" />
                          <h1 className='ms-3 font-bold opacity-55'>ACCOUNT SETTINGS</h1>
                      </div>
                      <ul className='py-3 ms-5'>
                             <li className='py-2 ms-2'>Profile information</li>
                             <li className='py-2 ms-2'>Manage Addresses</li>
                             <li className='py-2 ms-2'>PAN Cart information</li>
                          </ul>
                  </div>
                  <div className="payment p-2 border-b">
                      <div className="payment-sec flex items-center py-2">
                           <MdOutlinePayments className='text-xl text-blue-700' />
                           <h1 className='font-bold ms-3 opacity-55'>PAYMENTS</h1>
                      </div>
                       <div className='items flex justify-around items-center py-2'>
                           <span className='text-sm'>Gift Cards</span>
                           <span className='text-green-500 '>$0</span>
                       </div>
                       <div className='items ms-11 py-2'>
                           <span className='text-sm'>Saved UPI</span>
                       </div>
                       <div className='items ms-11 py-2'>
                           <span className='text-sm'>Saved Cards</span>
                       </div>
                  </div>
                  <div className="payment p-2">
                      <div className="payment-sec flex items-center py-2">
                           <MdFolder className='text-x text-blue-700' />
                           <h1 className='font-bold ms-3 opacity-55'>MY STUFF</h1>
                      </div>
                       <div className='items ms-11 py-2'>
                           <span className='text-sm'>My Coupons</span>
                       </div>
                       <div className='items ms-11 py-2'>
                           <span className='text-sm'>My Reviews & Ratings</span>
                       </div>
                       <div className='items ms-11 py-2'>
                           <span className='text-sm'>All Notification</span>
                       </div>
                       <div className='items ms-11 py-2'>
                           <span className='text-sm'>My Wishlist</span>
                       </div>
                  </div>
                   <div className="logout p-2 border-t">
                       <div className='flex items-center opacity-55 py-3 px-3'>
                           <FaPowerOff className='text-xl text-blue-700' />
                           <span className='font-bold ms-3'>Logout</span>
                       </div>
                   </div>
              </div>
              </div>
              {/* account details */}
              <div className="account-details p-10 bg-white w-full md:w-9/12">
                   <div className="form-and-account-details ">
                         <form action="">
                               <div className="form-data">
                                    <div className="group my-3">
                                    <h1 className='text-xl font-bold'>Personal Information</h1>
                                    <div className="md:flex gap-4">
                                    <div className="form-data my-3">
                                          <input type="text" placeholder='First NAME...' className='h-12 focus:outline-none w-60 bg-gray-100 ps-3 rounded-sm' />
                                    </div>
                                    <div className="form-data my-3">
                                          <input type="text" placeholder='Last NAME...' className='h-12 focus:outline-none w-60 bg-gray-100 ps-3 rounded-sm' />
                                    </div>
                                      <div className="form-data my-3">
                                          <button className="px-11 py-3 border bg-blue-500 font-semibold text-white">SAVE</button>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="group">
                                          <label htmlFor="gender">Your Gender</label>
                                           <div className="py-2 flex items-center">
                                            <input type="radio" name="" id=""  className="w-5 h-5"/>
                                             <label htmlFor="male" className="font-semibold ms-4">Male</label>
                                              <div className="ms-3">
                                              <input type="radio" name="" id="" className="w-5 h-5" />
                                              <label htmlFor="male" className="font-semibold ms-4">Female</label>
                                              </div>

                                           </div>
                                    </div>
                                    <div className="group my-3 py-3">
                                         <label htmlFor="email-address" className="font-bold text-xl">Email Address</label><br />
                                         <input type="text" placeholder="Enter Email...." className="outline-none p-3 my-3 bg-gray-100 h-12 w-60" />
                                    </div>
                                    <div className="group my-3 py-3">
                                         <label htmlFor="email-address" className="font-bold text-xl">Mobile Number</label><br />
                                         <input type="number" placeholder="xxxxxxxxx" className="outline-none p-3 my-3 bg-gray-100 h-12 w-60" />
                                    </div>
                               </div>
                         </form>
                         <div className="details">
                              <h1 className="font-semibold py-3">FAQs</h1>
                              <h4 className="font-semibold">What happens when I update my email address (or mobile number)?</h4>
                              <p className="py-3">Your login email id (or mobile number) changes, likewise. You&apos;ll receive all your account related communication on your updated email address (or mobile number).</p>
                              <h4 className="font-semibold">When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
                              <p className="py-3">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                              <h4 className="font-semibold">What happens to my existing Flipkart account when I update my email address (or mobile number)?</h4>
                              <p className="py-3 text-sm">Updating your email address (or mobile number) doesn&apos;t invalidate your account. Your account remains fully functional. You&apos;ll continue seeing your Order history, saved information and personal details.</p>
                               <h4 className="font-semibold">Does my Seller account get affected when I update my email address?</h4>
                              <h1 className="py-3 text-red-600">Delete Account</h1>
                         </div>
                   </div>
              </div>
        </div>
    </div>
  )
}

export default MyAccount
