import React from 'react';
import { NavLink } from 'react-router-dom'; // Import Link component


const Navbar = () => {
  const NavItems = [
    {
      path: "/",
      title: "Home",
    },

    {
      path: "/Projects",
      title: "Projects",
    },
    
    {
      path: "/Upcoming-events",
      title: "Upcoming Events",
    },
  
    {
      path: "/store",
      title: "Store",
    },

    {
      path: "/Publish",
      title: "Publish your campaign",
    },
    // {
    //   path: "/CarbonCoin",
    //   title: "Carbon Offset Tracker",
    // },
    // {
    //   path: "/CarbonTrading",
    //   title: "Carbon Trading"
    // },
    {
      path: "/Login",
      title: "Login",
    },
    {
      path: "/Signup",
      title: "Sign Up",
    }

  ];
  return (
    <nav className=" main-nav flex place-content-between bg-black text-white items-center h-14 text-[1.2rem]" >
    <h1 className="px-10 font-bold text-xl">BioPreserve</h1>
    <div className="flex gap-2">
        {
            NavItems.map((item,index) => (
            
              <NavLink key={index} to={item.path} className={({ isActive, isPending }) =>
                isPending ? "hover:bg-green-900 " : isActive ? "bg-green-800/80 px-6 flex h-full items-center justify-center rounded-lg " : "px-6 hover:bg-green-800/[0.3] flex h-full items-center justify-center rounded-lg "
              }><p className='p-1'>{item.title}</p></NavLink>
            ))
        }

    </div>
</nav>

  );
};

export default Navbar;
