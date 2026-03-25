


import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const Navbar = () => {
    const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About Us",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
const links=                navigationData.map(router=>(
                <li key={router.id} className='mx-5 my-2 w-fit transition-all duration-300 hover:bg-white hover:text-2xl hover:text-black'>
                    <a href={router.path}>{router.name}</a>
                </li>
               ))
const [showNav,setShowNav]=useState(false);
const showNavbar=()=>{
    setShowNav(!showNav);
}
    return (
        <div  >
          <span className='flex '>    
            {showNav?
        <X className="md:hidden cursor-pointer" onClick={showNavbar}></X>
            : <Menu className="md:hidden cursor-pointer" onClick={showNavbar}></Menu>}
             <p className='md:hidden flex mx-4'>Syed Takmil</p></span>
            <ul className='md:flex justify-between  hidden'>
           
{links}
            </ul>
            <ul className={`
        md:hidden absolute left-5 w-full transition-all duration-200 ease-in-out 
        ${showNav ? 'top-12 opacity-70' : '-top-300px opacity-0'}
      `}>
        {links}
      </ul>
        </div>
    );
};

export default Navbar;