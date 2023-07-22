
import './Navbar.css'
import { useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/Logo.jpg'
import { Link } from 'react-router-dom';
function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="profile pic" />
                </div>
                <nav ref={navRef}>
                
                    <a href="/"><Link to='/'>Home</Link> </a>
                    <a href="/"><Link to='/about'>About</Link></a>
                    <a href="/"><Link to='/portfolio'>Portfolio</Link></a>
                    <a href="/"><Link to='/contact'>Contact</Link></a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    id='ham'
                    onClick={showNavbar}>
                    <AiOutlineMenu />
                </button>
                {/* <button className='hire'>
                    Enterprise Solutions
                </button> */}
            </header>
        </>
    )
}

export default Navbar
