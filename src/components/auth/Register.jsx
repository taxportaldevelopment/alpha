// icons
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const Register = () => {

    const navigate = useNavigate();
    const [passwordShow,setPasswordShow] = useState(true);

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = (e)=>{
          e.preventDefault();
          console.log(username,password);
          
          if(username == "alpha" & password == "123456"){
               return navigate("/myaccount")
          }
    }

  return (
    <div>
         <div className="register-section bg-gray-200 py-3">
                             <div className="flex my-3 justify-center items-center border-b">
                             <div className="form-sec w-full md:w-96 border rounded-md p-2 bg-white">
                                             <form onSubmit={handleSubmit} >
                                                   <h1 className="py-3  text-center text-2xl haed-style">Accessorize 2 Alpha</h1>
                                                  <div className="input-group py-3">
                                                        <label htmlFor="firstname" className="font-bold opacity-55">First Name</label>
                                                         <div className="border my-2">
                                                         <input type="text" name='firstname' required onChange={(e)=>setUsername(e.target.value)} className="block w-full h-10 ps-2 outline-none" placeholder="first name...." id='firstname' />
                                                         </div>
                                                  </div>
                                                  <div className="input-group py-3">
                                                        <label htmlFor="lastname" className="font-bold opacity-55">Last Name</label>
                                                         <div className="border my-2">
                                                         <input type="text" name='lastnamne' required onChange={(e)=>setUsername(e.target.value)} className="block w-full h-10 ps-2 outline-none" placeholder="last name...." id='lastname' />
                                                         </div>
                                                  </div>
                                                  <div className="input-group py-3">
                                                        <label htmlFor="username" className="font-bold opacity-55">Email</label>
                                                         <div className="border my-2">
                                                         <input type="email" name='email' required onChange={(e)=>setUsername(e.target.value)} className="block w-full h-10 ps-2 outline-none" placeholder="email...." id='username' />
                                                         </div>
                                                  </div>

                                                  <div className="input-group">
                                                        <label htmlFor="password-sec" className="font-bold opacity-55">Password</label>
                                                        <div className="flex items-center border rounded-md my-2">
                                                          <input type={passwordShow?"password":"text"} name='password' required onChange={(e)=>setPassword(e.target.value)} className="block w-full h-8 ps-2 outline-none" placeholder="Password...." id='password-sec' />
                                                           {passwordShow?<MdOutlinePassword  onClick={()=>setPasswordShow(!passwordShow)} className="text-2xl cursor-pointer"/>:
                                                          <FaEye onClick={()=>setPasswordShow(!passwordShow)} className="text-2xl cursor-pointer"/>
                                                           }
                                                          
                                                </div>
                                                  </div>
                                                  <div className="input-group py-3">
                                                        <label htmlFor="password-sec" className="font-bold opacity-55">Confirm Password</label>
                                                        <div className="flex items-center border rounded-md my-2">
                                                        <input type="password" name='password' required onChange={(e)=>setPassword(e.target.value)} className="block w-full h-8 ps-2 outline-none" placeholder="confirm password...." id='password-sec' />
                                                          
                                                </div>
                                                  </div>
                                                  
                                                    <div className="input-group flex justify-center items-center my-3">
                                                          <button className="px-16 py-2 rounded-md bg-yellow-400 hover:bg-yellow-300">Sign In</button>
                                                    </div>
                                                    <div className="input-group flex justify-between items-center py-2 text-blue-400 underline">
                                                         <a href="#">Sing In</a>
                                                         
                                                    </div>
                                             </form>
                              </div>
                             </div>
         </div>
    </div>
  )
}

export default Register
