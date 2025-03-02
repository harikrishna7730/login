import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Datashare } from "../App";
import axios from "axios";

const Navbar=()=>{
  const{searchQuery,handleSearchChange}=useContext(Datashare)
  
    return(
        <>
    <nav className='bg-gradient-to-r from-slate-500 to-slate-800 sticky top-0'>
      <ul className="flex row  justify-around p-6 w-[30px]">
        <li className='px-5 text-white hover:underline font-bold text-2xl cursor-pointer '><Link to={"/home"}>Home</Link></li>
        <li className='px-5 text-white hover:underline font-bold text-2xl cursor-pointer '><Link to={"/location"}>Locations</Link></li>
        <li className='px-5 text-white hover:underline font-bold text-2xl cursor-pointer '><Link to={"/contact"}>Contact</Link></li>
        <li className='px-5 text-white hover:underline font-bold text-2xl cursor-pointer '><Link to={"/about"}>About</Link></li>
        <form onSubmit={""} className=' position-relative left-[20px] mt-[-4px] ml-28'>
        <input typeof='search' className='absolute peer z-10 text-white bg-transparent w-3 h-12 rounded-full border cursor-pointer outline-none pl-12 pr-4 focus:w-[320px] focus:border-white-300 focus:cursor-text focus:pl-16 focus:pr-4' value={searchQuery} onChange={handleSearchChange}/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="h-8 w-16 px-3.5 pt-3 border-r border-transparent peer-focus:border-white-300 stroke-gray-500 peer-focus:stroke-white-200 transition-all duration-300 focus:w-[200px] cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg> 
        </form>
      </ul>
    </nav>
        </>
    )
}
export default Navbar;



//   const {setData}=useContext(Datashare)
//   const [search ,setSearch] =useState("");
//   const handleSearch=(e)=>{
//     setSearch(e.target.value)
//     console.log(e.target.value)
// }

// const FetchingApi=(e)=>{
//   e.preventDefault()
//   const url = `https://all-in-one-recipe-api.p.rapidapi.com/search/${search}`;
//   const options = {
//       method: 'GET',
//       headers: {
//           'x-rapidapi-key': '6c589db793msh563546083ef0f49p171f5djsn8ada960bfdc0',
//           'x-rapidapi-host': 'all-in-one-recipe-api.p.rapidapi.com'
//       }
//   };

//           fetch(url, options).then((val) => {
//               return val.json();
//           }).then((val) => {
//               setData(val.recipes.data)
//               console.log(val);
//           }).catch((err)=>{
//               console.log(err)
//           })
    
//       }   