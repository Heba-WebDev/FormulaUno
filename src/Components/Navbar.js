import React from 'react'
import Hamburger from '../icon-hamburger.svg'
import {Outlet, Link} from 'react-router-dom'

export default function Navbar() {
    //font-rubik-glitch

    return (
        <div className="container mx-auto gap-y-3 flex flex-col p-3 ">
        <nav className='flex justify-between py-4'>
   
            <Link to='/'> 
            <h3 className='text-white'>FormulaUNO</h3>   
            </Link>

            <img src={Hamburger} alt='mobile menu icon'/>
            
        </nav>

        <Outlet />
        </div>
    )
}