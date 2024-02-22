import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import {MyContext} from "../context/Context"
const NavBar = () => {
    const {setParams} = useContext(MyContext)
    const [term,SetTerm] = useState('')
    const [menu,setMenu] = useState(false)
    return (
        <div className=' min-w-screen h-10 drop-shadow bg-red-50'>
            <div className='px-4 mx-auto justify-around flex gap-4 items-center h-full min-w-60'>
                <NavLink to={'/'} className='min-w-max font-bold text-blue-950'>Food Recipe</NavLink>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    setParams(term)
                    SetTerm('')
                }}>
                    <input value={term} onChange={(e)=>{
                        SetTerm(e.target.value)
                    }} id='search' placeholder='Search here ...' className='focus:outline-none px-2 focus:ring-2 focus:ring-blue-500 max-w-80 min-w-40 w-full rounded-md shadow-md' type="text" />
                </form>
                <div>
                <div className='hidden md:flex md:gap-4'>
                    <NavLink className='font-semibold text-blue-950' to={'/'}>Home</NavLink>
                    <NavLink className={'font-semibold text-blue-950'} to={'/favorites'}>Favorites</NavLink>
                </div>
                    <button onClick={()=>setMenu((prev)=>!prev)} className='md:hidden'><GiHamburgerMenu /></button>
                </div>

                {/* small screens menu */}
                {menu?<div className='md:hidden flex flex-col gap-2 bg-red-50 absolute top-12 right-2 px-2 py-2'>
                    <NavLink className='font-semibold text-blue-950' to={'/'}><button onClick={()=>setMenu(false)}>Home</button></NavLink>
                    <NavLink className={'font-semibold text-blue-950'} to={'/favorites'}> <button onClick={()=>setMenu(false)}>Favorites</button></NavLink>
                </div>:null}

            </div>
        </div>
    )
}

export default NavBar