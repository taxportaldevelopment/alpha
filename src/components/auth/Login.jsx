// icons
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
const Login = () => {

    const [passwordShow,setPasswordShow] = useState(true);
  return (
    <div>
         <div className="login-section py-4">
               <div className="flex h-96 justify-center items-center border">
               <div className="form-sec w-96 border rounded-md p-2">
                               <form action="">
                                     <h1 className="py-3  text-center text-2xl haed-style">Accessorize 2 Alpha</h1>
                                    <div className="input-group py-3">
                                          <label htmlFor="username" className="font-bold">username</label>
                                           <div className="flex items-center border rounded-md my-2">
                                           <input type="text" name='' className="block w-full h-8 ps-2 outline-none" placeholder="Username...." id='username' />
                                           <FaUser className="text-2xl" />
                                           </div>
                                    </div>
                                    <div className="input-group">
                                          <label htmlFor="password-sec" className="font-bold">password</label>
                                          <div className="flex items-center border rounded-md my-2">
                                            <input type={passwordShow?"password":"text"} name='' className="block w-full h-8 ps-2 outline-none" placeholder="Password...." id='password-sec' />
                                             {passwordShow?<MdOutlinePassword  onClick={()=>setPasswordShow(!passwordShow)} className="text-2xl cursor-pointer"/>:
                                            <FaEye onClick={()=>setPasswordShow(!passwordShow)} className="text-2xl cursor-pointer"/>
                                             }
                                            
                                          </div>
                                    </div>
                                      <div className="input-group flex justify-center items-center my-3">
                                            <button className="px-16 py-2 rounded-md bg-yellow-400 hover:bg-yellow-300">Sign In</button>
                                      </div>
                                      <div className="input-group flex justify-between items-center py-2 text-blue-400 underline">
                                           <a href="#">Sing Up</a>
                                           <a href="#">forgot password</a>
                                      </div>
                               </form>
                </div>
               </div>
         </div>
    </div>
  )
}

export default Login
