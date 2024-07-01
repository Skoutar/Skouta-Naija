import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 bg-white w-full h-[94px] border border-[#131313] opacity-0'>
            <img src="images/Navlogo.png" alt="" className='Brand-logo' />
            <div className='nav-sec'>
                <div className='nav-link'>
                    <a href="#">Browse Space</a>
                    <a href="#">List your Space</a>
                </div>
                <Link to='/login'>
                    <button className='Nav-button1' to> Log in</button>
                </Link>
                <Link to='/signup'>
                    <button className='Nav-button2'> Sign up </button>

                </Link>
            </div>

        </div>
    )
}

export default Navbar;
