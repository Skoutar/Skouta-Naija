import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <img src="images/BrandLogo.png" alt="" className='Brand-logo' />
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
