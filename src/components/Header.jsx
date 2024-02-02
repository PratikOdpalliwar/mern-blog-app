import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    
    <nav className="bg-white p-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <Link to="/">
          Your Logo
          </Link></div>
       
        <ul className="hidden md:flex mx-5 space-x-4">
<li>
           <Link to="/profile">Ernest Achiever</Link>
          </li>
          <li>
          <Link to="/create">Create Post</Link>
          </li>
         <li>
         <Link to="/authors">Authors</Link>
         </li>
         <li>
         <Link to="/logout">Logout</Link>
         </li>
       </ul>
       
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <IoMdClose />
 : <FaBars />
}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <Link to="/profile" className="block text-black mb-2">Ernest Achiever</Link>
          <Link to="/create" className="block text-black mb-2">Create Post</Link>
          <Link to="/authors" className="block text-black mb-2">Authors</Link>
          <Link to="/logout" className="block text-black mb-2">Logout</Link>
        </div>
      )}
    </nav>
  )
}

export default Header


