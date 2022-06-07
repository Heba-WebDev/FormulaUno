import React from 'react'
import Hamburger from '../icon-hamburger.svg'

export default function Navbar() {
    //font-rubik-glitch

    return (
        <nav className='flex justify-between py-4'>
   
            <h3 className='text-white'>FormulaUNO</h3>

            <img src={Hamburger} alt='mobile menu icon'/>
            
        </nav>
    )
}