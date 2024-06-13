import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <h1 className='Nav-logo'>
                skouta
            </h1>

            <div className='nav-sec'>
                <div className='nav-link'>
                    <a href="#">Browse Space</a>
                    <a href="#">List your Space</a>
                </div>

                <button className='Nav-button1'> 
                   <span className='button-text1'>Log in</span>
                </button>
                <button className='Nav-button2'>
                    <span className='button-text2'> Sign up </span>
                </button>

            </div>

        </div>
    )
}

export default Navbar;
