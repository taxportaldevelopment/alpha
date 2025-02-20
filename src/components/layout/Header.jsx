import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavItem,
  SideContent,
  SideItems,
  DropDown,
} from "responsive-navigation";
// icons
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
const Header = () => {
return (
  <div>
<Navbar
style={{
  backgroundColor: "white",
  borderBottom: "1px solid #dee2e6",
  padding: "20px 0",
}}
>
<NavbarBrand>
  <a href="/" style={{ fontSize: "30px", fontWeight: "700" }}>
    LOGO
  </a>
</NavbarBrand>
<SideContent>
  <SideItems>

       <div className="search-input flex items-center border">
           <input type="text" className="md:w-96 h-10 ps-2 outline-none focus:border-none" placeholder="Try Saree,Kurti or Search by Product Code" />
             <div className="">
               <IoSearch className="text-3xl" />
             </div>
       </div>
  </SideItems>
  {/* <SideItems>Sign Up</SideItems> */}
</SideContent>
<NavbarContent>
  <NavItem>
    <a href="/">Home</a>
  </NavItem>
  <NavItem>
    <a href="/">Categori</a>
  </NavItem>
  <DropDown style={{ width: "150px" }} label="Latest">
    <NavItem>
      <a href="/">Product List</a>
    </NavItem>
    <NavItem>
      <a href="/">Product Details</a>
    </NavItem>
  </DropDown>
  <DropDown style={{ width: "150px" }} label="Blog">
    <NavItem>
      <a href="/">Blog</a>
    </NavItem>
    <NavItem>
      <a href="/">Blog Details</a>
    </NavItem>
  </DropDown>
  {/* <DropDown style={{ width: "150px" }} label="Pages">
    <NavItem >
      <a className="py-1" href="/">Login</a>
    </NavItem>
    <NavItem >
      <a className="py-1" href="/">Card</a>
    </NavItem>
    <NavItem >
      <a className="py-1" href="/">Element</a>
    </NavItem>
    <NavItem >
      <a className="py-1" href="/">About</a>
    </NavItem>
    <NavItem >
      <a className="py-1" href="/">Confirmation</a>
    </NavItem>
    <NavItem >
      <a className="py-1" href="/">Shopping Cart</a>
    </NavItem>
    <NavItem >
      <a className="py-1" href="/">Product Checkout</a>
    </NavItem>
  </DropDown> */}
  <NavItem>
    <a href="/">Contact</a>
  </NavItem>
  <NavItem>
       <div>
           <div className=" relative">
              <VscAccount className="text-3xl" />
              <div className="absolute flex justify-center items-center text-white -top-3 left-3 h-6 rounded-full w-6 bg-red-600">
                  <span>10</span>
              </div>
           </div>
       </div>
  </NavItem>
  <NavItem>
       <div> <div className=" relative">
              <IoIosCart className="text-3xl" />
              <div className="absolute flex justify-center items-center text-white -top-3 left-3 h-6 rounded-full w-6 bg-red-600">
                  <span>10</span>
              </div>
           </div>
       </div>
  </NavItem>
</NavbarContent>

</Navbar>
  </div>
)
}

export default Header
