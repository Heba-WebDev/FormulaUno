import Hamburger from '../icon-hamburger.svg'

export default function Navbar() {

    return (
        <nav className='flex justify-between py-4'>

            <h3 className='font-rubik-glitch text-gray-400'>FormulaUNO</h3>

            <img src={Hamburger} alt='mobile menu icon'/>
            
        </nav>
    )
}